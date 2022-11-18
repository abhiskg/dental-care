import express from "express";
import cors from "cors";
import dbConnect from "./config/dbConnect";

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Database Connected & Running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log((err as Error).message);
  });
