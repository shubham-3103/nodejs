const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('PLease turnoff the motor');
  setTimeout(() => {
    console.log('PLease turnoff the motor! its a gentle reminder');  
  }, 3000);
  
});
console.log('the script is running');
myEmitter.emit('WaterFull');
console.log('the script is still running');
myEmitter.emit('WaterFull');

