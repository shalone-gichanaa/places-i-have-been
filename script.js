function Place(location, landmarks, datevisited, remarks) {
    this.location = location;
    this.landmarks = landmarks;
    this.datevisited = datevisited;
    this.remarks = remarks;
}

Place.prototype.placeDetails = function() {
    return this.location + " is a place I have visited. I went there on " + this.datevisited + ". The landmarks I visited were " + this.landmarks + ". My remarks about the place are: " + this.remarks;
}

let places = [];

let bali = new Place("Bali", "Tanah Lot, Uluwatu Temple", "2022-05-15", "Beautiful beaches and vibrant culture.");
let paris = new Place("Paris", "Eiffel Tower, Louvre Museum", "2021-09-10", "Romantic city with rich history.");
let tokyo = new Place("Tokyo", "Shibuya Crossing, Tokyo Tower", "2023-03-20", "Fascinating blend of tradition and modernity.");

places.push(bali, paris, tokyo);

document.getElementById("place-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let location = document.getElementById("location").value;
    let landmarks = document.getElementById("landmarks").value;
    let datevisited = document.getElementById("datevisited").value;
    let remarks = document.getElementById("remarks").value;
    
    let newPlace = new Place(location, landmarks, datevisited, remarks);
    places.push(newPlace);

    displayPlaces();
});

function displayPlaces() {
    let placeList = document.getElementById("placeList");
    placeList.innerHTML = "";

    places.forEach(function(place, index) {
        let li = document.createElement("li");
        li.textContent = place.location;

        li.addEventListener("click", function() {
            document.getElementById("placeDetails").innerHTML = place.placeDetails();
        });
        placeList.appendChild(li);
    });

    function displayDetails(index) {
        let place = places[index];

        let details = "Location: " + place.location + "<br>" +
                      "Landmarks: " + place.landmarks + "<br>" +
                      "Date Visited: " + place.datevisited + "<br>" +
                      "Remarks: " + place.remarks;
        document.getElementById("placeDetails").innerHTML = details;
    }
}

