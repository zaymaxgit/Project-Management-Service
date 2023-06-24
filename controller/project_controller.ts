import { pool } from "../database/postgres";
import { logger } from "../log/logger";
import { Request, Response } from "express";

let arrSymbol = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
const randId = (arr: string | any[], numb: number) => {
  let res = [];
  for (let i = 0; i < numb; i++) {
    res.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return res.join("");
};

export const create_project = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    let id = randId(arrSymbol, 10);
    let project_create: any = await pool.query(
      `INSERT INTO projects VALUES ('${id}','${name}','${description}');`
    );
    res.json("Project create");
  } catch (error) {
    logger.error("error create project");
  }
};

export const create_task = async (req, res) => {
  try {
    const { name, description, project_id } = req.body;
    let id = randId(arrSymbol, 10);
    let task_create: any = await pool.query(
      `INSERT INTO tasks VALUES ('${id}','${name}','${description}','${project_id}');`
    );
    res.json("Task create");
  } catch (error) {
    logger.error("error create task");
  }
};
