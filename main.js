status = "";
function setup(){
canvas = createCanvas(300, 380);
canvas.center();
video.createCapture(VIDEO);
video.hide();
}

function start(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status= Detecting Objects"; 
image(video, 0, 0, 300, 380);                                                                                                                                           
}

function modelLoaded(){
console.log("MODEL IS LOADED!!!!!");
status = true;
}