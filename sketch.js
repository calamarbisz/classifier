let mobilenet
let video
let label

function modelready(){
  console.log('modelready');
  mobilenet.predict(video, GotResult);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  video = createCapture(VIDEO);
  video.hide();
  mobilenet = ml5.imageClassifier('MobileNet',video, modelready)
}

function GotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  label = results[0].label;
  mobilenet.predict(GotResult);
  
  fill(0,255,0);
  textSize(30);
  text(label, random(windowWidth), random(windowHeight));
}


function draw(){
  imageMode(CENTER);
  image(video,windowWidth/2,windowHeight/2,300,200);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
