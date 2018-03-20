console.log("Starting node app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;
const notes = require('./notes.js');

var command = process.argv[2];
console.log('command: ', command);
console.log('process' ,process.argv);
console.log('yargs', argv);
if (command === 'list'){
    notes.getAll();
}else if(command === 'add'){
    notes.addNote(argv.title, argv.body); 
}else if(command === 'read'){
    notes.fetchNote(argv.title);
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}
    else{
    console.log('command not recogonized');
}