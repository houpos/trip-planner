const mapbox = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function (type, coords) {

  const newMarker = document.createElement('div');
  newMarker.style.width = "32px";
  newMarker.style.height = "39px";
  if (type === "activity") {
    newMarker.style.backgroundImage = `url(${iconURLs.activities})`;
  } else if (type === 'hotel') {
    newMarker.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
  } else if (type === 'restaurants') {
    newMarker.style.backgroundImage = `url(${iconURLs.restaurants})`;
  }

  return new mapbox.Marker(newMarker).setLngLat(coords);
};

module.exports = buildMarker;
