import express from "express";  // package.json -> "type":"module"  --->  makes this folder as amodule and deals with 'incursing a performance overhead' warning
import notesRouter from "./routes/notesRouter.js";

const app = express();

app.use("/api/notes", notesRouter)

app.listen(5000, () => {
  console.log("Server started at PORT: 5000");
});

// package.json -> "scripts": {"dev": "nodemon server.js", "start": "node server.js"}
//    *) npm run dev  --->  runs 'nodemon server.js'
//    *) npm run start  --->  runs 'node server.js'

// terminal -> npm install nodemon -D
//    *) nodemon  --->   refresh the server on every update in the server
//    *) -D  --->  installs the dependency as devDependencies
