import { EventEmitter, once } from "node:events";

const emitter = new EventEmitter();

// register an event
emitter.on('messageLogged', (arg) => {
    console.log("Event called:", arg);
});

// raise an event
emitter.emit('messageLogged', { id: 1, url: 'https://' });

//gpt
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

const run = async () => {
  setTimeout(() => {
    myEmitter.emit("finish", "✅ All done!");
  }, 1000);

  // wait for event (promise-based)
  const [message] = await once(myEmitter, "finish");
  console.log("Got event via promise:", message);
};

run();
