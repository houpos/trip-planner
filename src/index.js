const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

mapboxgl.accessToken = "pk.eyJ1IjoiaG91cG9zIiwiYSI6ImNrMTZsdHJmbTAwankzbnFha3hycDk2ankifQ.uegt4IAKBEIochyQabus9w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const newMarker = document.createElement('div');
// newMarker.style.width = "32px";
// newMarker.style.height = "39px";
// newMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(newMarker).setLngLat([-74.009, 40.705]).addTo(map);

const restaurantMarker = buildMarker("restaurant", [40.7059947, -74.0114533]); // or [-87.6354, 41.8885]
restaurantMarker.addTo(map);

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
