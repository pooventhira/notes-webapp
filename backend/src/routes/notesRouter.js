import express from "express";
import { createNote, deleteNote, getAllNotes, getNote, updateNote } from "../controller/notesController.js";

const notesRouter = express.Router();

notesRouter.post("/", createNote);
notesRouter.get("/", getAllNotes);
notesRouter.get("/:id", getNote);
notesRouter.put("/:id", updateNote);
notesRouter.delete("/:id", deleteNote);

export default notesRouter;
