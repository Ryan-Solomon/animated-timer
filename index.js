const durationEle = document.querySelector('#duration');
const startEle = document.querySelector('#start');
const pauseEle = document.querySelector('#pause');

const circleEle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;

const timer = new Timer(durationEle, startEle, pauseEle, {
  onStart(totalTime) {
    duration = totalTime;
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', currentOffset);
    currentOffset =
      currentOffset - ((perimeter * timeRemaining) / duration - perimeter);
  },
  onComplete() {
    console.log('Done!');
  },
});
