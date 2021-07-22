/* global data */
/* exported data */

var $car = document.querySelector('.car');

function test(event) {
  if (event.key === 'ArrowLeft') {
    $car.className = 'car west';
    data.direction = 'west';
  } else if (event.key === 'ArrowRight') {
    $car.className = 'car east';
    data.direction = 'east';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'car north';
    data.direction = 'north';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'car south';
    data.direction = 'south';
  }
}

window.addEventListener('keydown', test);
