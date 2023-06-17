import express from "express";
import { router } from "./routes/user_router";
import session from "express-session";
import { logger } from "./log/logger";

const app = express();
const port = 5000;

//logger.info("Hi me Lord!")

app.use(
  session({
    secret: "zaymax",
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => logger.info(`Running on port ${port}`));
