import { Car } from './Car.js';

const car = new Car(100, 100);

window.addEventListener('load', function () {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let frameTime = {
    previous: 0,
    secondsPassed: 0,
  };

  function frame(time) {
    window.requestAnimationFrame(frame);

    frameTime = {
      secondsPassed: (time - frameTime.previous) / 1000,
      previous: time,
    };

    context.clearRect(0, 0, canvas.width, canvas.height);

    car.update(frameTime, context);
    car.draw(context);
  }

  window.requestAnimationFrame(frame);
});