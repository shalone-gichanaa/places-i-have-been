# places-i-have-been

## Description

This project is a web application that allows users to keep track of places they have visited. 

Each place is created using a constructor function and stored inside an array. When a user clicks on a place name, the full details of that destination are displayed dynamically on the page.

The goal of this project is to practice using constructors, prototypes, arrays, and test-driven development in JavaScript.

## Technologies Used

HTML
CSS
JavaScript

### Constructor

```javascript
function Place(location, landmarks, datevisited, remarks, photolink) {
  this.location = location;
  this.landmarks = landmarks;
  this.datevisited = datevisited;
  this.remarks = remarks;
  this.photolink = photolink;
}

Place.prototype.placeDetails = function() {
  return this.location + " is a place I have visited. I went there on " 
    + this.datevisited + 
    ". The landmarks I visited were " 
    + this.landmarks + 
    ". My remarks about the place are: " 
    + this.remarks;

    let bali = new Place("Bali", "Tanah Lot", "2022-05-15", "Beautiful beaches", "assets/bali.jpg");

    bali.placeDetails();

    places.push(bali);
}



