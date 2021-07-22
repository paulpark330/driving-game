/* global data */
/* exported data */

var $car = document.querySelector('.car');
var intervalId = null;

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
    data.moving = !data.moving;
    if (data.moving === false) {
      intervalId = setInterval(space, 1.6);
    } else if (data.moving === true) {
      clearInterval(intervalId);
    }
  }
  $car.className = 'car ' + data.direction;
}

function space() {
  if (data.direction === 'east') {
    $car.style.left = data.location.x + 'px';
    data.location.x++;
  } else if (data.direction === 'west') {
    $car.style.left = data.location.x + 'px';
    data.location.x--;
  } else if (data.direction === 'north') {
    $car.style.top = data.location.y + 'px';
    data.location.y--;
  } else if (data.direction === 'south') {
    $car.style.top = data.location.y + 'px';
    data.location.y++;
  }
}

window.addEventListener('keydown', arrow);
