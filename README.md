```sh
Describe Place()
```
Test: "It should return a place object with location, landmark, year and note"\
Code:
let testPlace = new Place("Qingdao", ["May Fourth Square", "Qingdao Beer Museum", "Mt. Laoshan"], "2017", "Business travl");\
testPlace;\
Expected Output: Place {location: 'Qingdao', landmark: Array(3), year: '2017', note: 'Business travl'}