const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('turn off the motor!');
  setTimeout(()=>{
      console.log("its a gentle reminder to turn off the f**king motor");
    },3000);
});


myEmitter.emit('waterFull');