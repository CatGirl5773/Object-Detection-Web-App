img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('objects.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "") {
        for(var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("object").innerHTML = "There are 3 objects, out of which " + objects.length + " is/are detected.";

            percent = floor(objects[i].confidence * 100);
            fill("#FF0000");
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
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
    objects = results;
} 