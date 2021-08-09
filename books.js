img = "";
status = "";

function preload() {
    img = loadImage('books.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
}

function backHome() {
    window.location = "index.html";
}

function modelLoaded() {
    console.log("Model loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
} 