import Note from "../model/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("\nError in getAllNotes controller\n\n", error);    
    res.status(500).json({message:"Internal server error"});
  }
}

export async function getNote(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if(!note) return res.status(404).json({message: "Note not found"});
    res.status(200).json(note);
  } catch (error) {
    console.error("\nError in getNote controller\n\n", error);    
    res.status(500).json({message:"Internal server error"});
  }
}

export async function createNote(req, res) {
  try {
    const {title, content} = req.body;
    const newNote = new Note({title: title, content: content});
    await newNote.save();
    res.status(201).json({message: "Note created successfully"})
  } catch (error) {
    console.error("\nError in createNote controller\n\n", error);    
    res.status(500).json({message:"Internal server error"});
  }
}

export async function updateNote(req, res) {
  try {
    const {title, content} = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id, 
      {title: title, content: content},
      {new: true}
    );
    if(!updatedNote) return res.status(404).json({message: "Note not found"})
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("\nError in updateNote controller\n\n", error);    
    res.status(500).json({message:"Internal server error"});
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedNote);
  } catch (error) {
    console.error("\nError in deleteNote controller\n\n", error);    
    res.status(500).json({message:"Internal server error"});
  }
}
