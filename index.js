const durationEle = document.querySelector('#duration');
const startEle = document.querySelector('#start');
const pauseEle = document.querySelector('#pause');

const timer = new Timer(durationEle, startEle, pauseEle, {
  onStart() {
    console.log('Time started');
  },
  onTick() {
    console.log('Ticking!');
  },
  onComplete() {
    console.log('Done!');
  },
});
