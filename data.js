/* exported data */

var data = {
  direction: 'east'
};

var previousDataModel = localStorage.getItem('car');

if (previousDataModel !== null) {
  data = JSON.parse(previousDataModel);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('car', dataJSON);
});
