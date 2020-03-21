let mobilenet;
let video;
let label;
let sound=[];
//let img;

function modelready(){
  console.log('modelready');
  mobilenet.predict(video, GotResult);
}

function preload(){
  soundFormats('wav', 'ogg');
   for (let i=0; i < 9; i++){
     sound[i]= loadSound('sound'+ i +'.wav');
  }
  //img = loadImage('estrellas.jpg');
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
  label = results[0].label.toUpperCase();
  mobilenet.predict(GotResult);

  fill(0,255,0);
  textSize(15);
  text(label, random(windowWidth), random(windowHeight));
   if(label == 'WINDOW SCREEN'){
    sound[0].play();
  } else if(label == 'MASK'){
    sound[1].play();
  } else if(label == 'WIG'){
    sound[2].play();
  }else if(label == 'SKI MASK'){
    sound[3].play();
  }else if(label == 'CLOAK'){
    sound[4].play();
  }else if(label == 'ABAYA'){
    sound[5].play();
  }else if(label == 'VACUUM, VACUUM CLEANER'){
    sound[6].play();
  }else if(label == 'SPOTLIGHT, SPOT'){
    sound[7].play();
 }else if(label == 'MOUSE, COMPUTER MOUSE'){
    sound[8].play();
 }

}


function draw(){
  // background(0);
  imageMode(CENTER);
  image(video,windowWidth/2,windowHeight/2,300,200);
  // fill(0,255,0);
  // textSize(50);
  // text(label, 10, 40);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
