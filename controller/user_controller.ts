import { pool } from "../database/postgres";
import { logger } from "../log/logger";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

declare module "express-session" {
  interface SessionData {
    loggedin: any;
    nickname: string;
    iduser: number;
    login: any;
  }
}

export const user_reg = async (req: Request, res: Response) => {
  try {
    const { login, password, nickname } = req.body;
    let user_exist: any = await pool.query(
      `SELECT login FROM users WHERE login = '${login}';`
    );
    const hashPassword = bcrypt.hashSync(password, 8) + "Z@yGaKS";
    if (user_exist.rowCount == 0) {
      await pool.query(
        `INSERT INTO users (login,password,nickname) VALUES ('${login}','${hashPassword}','${nickname}');`
      );
      req.session.loggedin = true;
      req.session.nickname = nickname;
      req.session.login = login;
      //log
      logger.info(
        {
          login: login,
          nickname: nickname,
        },
        "Registration user"
      );
      res.json(`User ${req.session.nickname} create!`);
    } else {
      res.json("Such a user already exists");
    }
  } catch (error) {
    console.log(error);
  }
};

export const user_log = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;
    let user_exist: any = await pool.query(
      `SELECT * FROM users WHERE login = '${login}';`
    );
    const hashPassword = bcrypt.compareSync(
      password,
      user_exist.rows[0].password.replace("Z@yGaKS", "")
    );
    if (user_exist.rowCount != 0 && hashPassword == true) {
      req.session.loggedin = true;
      req.session.nickname = user_exist.rows[0].nickname;
      req.session.iduser = user_exist.rows[0].id;
      req.session.login = user_exist.rows[0].login;
      //log
      logger.info(
        {
          id_user: user_exist.rows[0].id,
          login: login,
          nickname: user_exist.rows[0].nickname,
        },
        "Login user"
      );
      res.json([req.session.iduser, req.session.nickname, req.session.login]);
    } else {
      res.json("Wrong login or password!");
    }
  } catch (error) {
    console.log(error);
  }
};

export const user_change = async (req, res) => {
  try {
    const body = req.body;
    if (body.nickname) {
      let user_change: any = await pool.query(
        `UPDATE users SET nickname = '${body.nickname}' WHERE login = '${body.login}';`
      );
      res.json(user_change);
    }
    if (body.password) {
      let user_change: any = await pool.query(
        `UPDATE users SET password = '${body.password}' WHERE login = '${body.login}';`
      );
      res.json(user_change);
    }
  } catch (error) {
    console.log(error);
  }
};

export const home = async (req, res) => {
  res.send(
    `Hi my lord! Session: ${req.session.iduser} + ${req.session.nickname}`
  );
};
