console.log("starting notes.js");
const fs = require('fs');
var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    try{
        var notesString = fs.readFileSync('note-data.json');
        notes = JSON.parse(notesString);
    }catch (e){

    }
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('note-data.json', JSON.stringify(notes));
    }

};
var getAll = () => {
    console.log("listing all notes");
}; 
var fetchNote = (title) => {
    console.log("fetching information from ", title);
};
var removeNote = (title) => {
    console.log("removing", title,"from notes");
};
module.exports = {
    addNote,
    getAll,
    fetchNote,
    removeNote
};