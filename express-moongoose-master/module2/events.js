const EventEmitter = require('events');

class ShoolBell extends EventEmitter {}

const shcoolBell = new ShoolBell();

shcoolBell.on('fullring', () => {
  console.log('yeah ho! ajke r class nai');
});


shcoolBell.on('1ring', () => {
  console.log('dett te ri ki, arekta class korte hoibo');
});


shcoolBell.emit('fullring');
shcoolBell.emit('1ring');