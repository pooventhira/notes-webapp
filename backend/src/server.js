import express, { json } from "express";  

import notesRouter from "./routes/notesRouter.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config()  // needed inorder to access the env variables

connectDB();

const app = express();

app.use(express.json());  // middleware
app.use("/api/notes", notesRouter);
app.listen(5000, () => {
  console.log("Server started at PORT: 5000");
});

// terminal -> npm init -y
//    *) initialize package.json

// terminal -> npm install express
//    *) initialize express.js app and installs dependencies

// package.json -> "type":"module"  
//    *) marks files as modules and deals with 'incursing a performance overhead' warning

// package.json -> "scripts": {
// "dev": "nodemon src/server.js", 
// "start": "node src/server.js"
// }
//    *) npm run dev  --->  runs 'nodemon src/server.js'
//    *) npm run start  --->  runs 'node src/server.js'

// terminal -> npm install nodemon -D
//    *) nodemon  --->   refresh the server on every update in the server
//    *) -D  --->  installs the dependency as devDependencies

// terminal -> npm install mongoose
//    *) mongoose  --->  insterd of 'mongodb' gives schema viewing options

// terminal -> npm i dotenv
//    *) i  --->   shorthand for 'install'
//    *) dotenv  --->  allows to use .env file and environment variables
