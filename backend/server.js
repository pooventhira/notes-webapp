import express from "express";  // package.json -> "type":"module"  --->  makes this folder as amodule and deals with 'incursing a performance overhead' warning

const app = express();

app.listen(5000, () => {
  console.log("Server started at PORT: 5000");
});

// package.json -> "scripts": {"dev": "node server.js"}  --->  runs 'node server.js' on 'npm run dev'