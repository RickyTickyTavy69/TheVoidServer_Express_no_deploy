//import packages
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

//import routes
import postsroutes from "./routes/posts.routes.js";

const app = express();

// environment variables
dotenv.config();
const PORT = process.env.PORT;
const MongoUri = process.env.MONGOURI;

//middleware
app.use(morgan('dev'))
app.use('/public', express.static('public'))
app.use(cors())
app.use(bodyParser.json());


const start = async () => {
      try{
            app.listen(PORT, () => {
                  console.log(`the server is running on port ${PORT}`);
            })
            await mongoose.connect(MongoUri);
      } catch(e){
            console.log("ein Fehler im Server, brudda", e);
      }
}

start();

app.use("/posts", postsroutes);

app.get("/", (req, res) => {
      res.status(200).json({message: "hello world"});
})
