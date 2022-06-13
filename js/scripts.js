function PlaceLog() {
  this.places = {};
}

PlaceLog.prototype.addPlace = function(place) {
  this.places[place.location] = place;
};

function Place(location, landmark, year, note) {
  this.location = location;
  this.landmark = landmark;
  this.year = year;
  this.note = note;
}
