function Place(location, landmarks, datevisited, remarks, photolink) {
    this.location = location;
    this.landmarks = landmarks;
    this.datevisited = datevisited;
    this.remarks = remarks;
    this.photolink = photolink;
}

Place.prototype.placeDetails = function() {
    return this.location + " is a place I have visited. I went there on " + this.datevisited + ". The landmarks I visited were " + this.landmarks + ". My remarks about the place are: " + this.remarks;
}

let places = [];

let bali = new Place("Bali", "Tanah Lot, Uluwatu Temple", "2022-05-15", "Beautiful beaches and vibrant culture.", "assets/bali.jpg");
let paris = new Place("Paris", "Eiffel Tower, Louvre Museum", "2021-09-10", "Romantic city with rich history.", "assets/paris.jpg");
let tokyo = new Place("Tokyo", "Shibuya Crossing, Tokyo Tower", "2023-03-20", "Fascinating blend of tradition and modernity.", "assets/tokyo.jpg");

places.push(bali, paris, tokyo);

document.getElementById("placeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let location = document.getElementById("locationInput").value;
    let landmarks = document.getElementById("landmarks").value;
    let datevisited = document.getElementById("dateVisited").value;
    let remarks = document.getElementById("remarks").value;
    let photolink = document.getElementById("photolink").value;
    
    let newPlace = new Place(location, landmarks, datevisited, remarks, photolink);
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
            displayDetails(index);
        });

        placeList.appendChild(li);
    });
}

function displayDetails(index) {
        let place = places[index];

        let details =
             `<h3>${place.location}</h3>
             ${place.photolink ? `<img src="${place.photolink}" alt='Photo of ${place.location}' width='200'>` : ''}
             <p>Landmarks: ${place.landmarks}</p>
             <p>Date Visited: ${place.datevisited}</p>
             <p>Remarks: ${place.remarks}</p>
                `;
        document.getElementById("placeDetails").innerHTML = details;
    }
    displayPlaces();


