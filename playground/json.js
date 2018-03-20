// var obj = {
//     name: 'mustafa'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personObject = '{"name": "Mustafa", "age": 18}';
// var person = JSON.parse(personObject);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
};
//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
console.log(originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
//note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);









