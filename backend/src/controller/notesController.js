export function createNote(req, res) {
  res.status(201).send("Note created successfully!");
}

export function getAllNotes(req, res) {
  res.status(200).send("Notes fetched successfully!");
}

export function updateNote(req, res) {
  res.status(200).send("Note updated successfully!");
}

export function deleteNote(req, res) {
  res.status(200).send("Note deleted successfully!");
}
