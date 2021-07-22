/* global data */
/* exported data */

var $car = document.querySelector('.car');

function arrow(event) {
  if (event.code === 'ArrowLeft') {
    data.direction = 'west';
  } else if (event.code === 'ArrowRight') {
    data.direction = 'east';
  } else if (event.code === 'ArrowUp') {
    data.direction = 'north';
  } else if (event.code === 'ArrowDown') {
    data.direction = 'south';
  }
  if (event.code === 'Space') {
    setInterval(space, 1.6);
  }
  $car.className = 'car ' + data.direction;
}

function space() {
  data.location.x++;
  $car.style.left = data.location.x + 'px';
}

window.addEventListener('keydown', arrow);
