# My Visited Places

#### By Zhibin Liang

#### A webpage show the places Zhibin has been visited

## Technologies Used

* HTML
* CSS
* JavaScript

## Setup/Installation Requirements

1. Clone the repo
    ```sh
    git clone (https://github.com/zbl14/my-visited-places.git)
    ```
2. Open index.html file

## TDD
```sh
Describe Place()
```
Test: "It should return a place object with location, landmark, year and note"\
Code:
let testPlace = new Place("Qingdao", ["May Fourth Square", "Qingdao Beer Museum", "Mt. Laoshan"], "2017", "Business travl");\
testPlace;\
Expected Output: Place {location: 'Qingdao', landmark: Array(3), year: '2017', note: 'Business travl'}


```sh
Describe PlaceLog()
```
Test: "It should return an empty PlaceLog object"\
Code:\
let placeLog = new PlaceLog();\
placeLog;\
Expected Output: PlaceLog {places: {…}}

Test: "It should return an object contains the testPlace object"\
Code:\
let placeLog = new PlaceLog();\
let testPlace = new Place("Qingdao", ["May Fourth Square", "Qingdao Beer Museum", "Mt. Laoshan"], "2017", "Business travl");\
placeLog.addPlace(testPlace);\
placeLog.places;\
Expected Output: {Qingdao: Place}

Test: "It should return an object contains the testPlace object with an unique ID 1"\
Code:\
let placeLog = new PlaceLog();\
let testPlace = new Place("Qingdao", ["May Fourth Square", "Qingdao Beer Museum", "Mt. Laoshan"], "2017", "Business travl");\
placeLog.addPlace(testPlace);\
placeLog.places;\
Expected Output: {1: Place}

## Known Bugs

* None

## License

MIT

Copyright &copy; 2022 Zhibin Liang