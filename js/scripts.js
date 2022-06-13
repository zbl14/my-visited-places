function PlaceLog() {
  this.places = {};
  this.currentId = 0;
}

PlaceLog.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

PlaceLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Place(location, landmark, year, note) {
  this.location = location;
  this.landmark = landmark;
  this.year = year;
  this.note = note;
}

let placeLog = new PlaceLog();
let testPlace = new Place("Qingdao", ["May Fourth Square", "Qingdao Beer Museum", "Mt. Laoshan"], "2017", "Business travl");