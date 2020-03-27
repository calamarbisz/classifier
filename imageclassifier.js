let mobilenet;
let video;
let label;
let sound=[];
let img;
let hada, osito, bellver, cisne;

function modelready(){
  console.log('modelready');
  mobilenet.predict(video, GotResult);
}

function preload(){
  soundFormats('wav', 'ogg');
   for (let i=0; i < 9; i++) {
     sound[i]= loadSound('sound/sound'+ i +'.wav');
  }
  img = loadImage('estrellitas.png');
  img.width = windowWidth;
  img.height = windowHeight;
//  hada = loadImage('hada.png');
//  osito = loadImage('osito1.png');
  //bellver = loadImage('bellver.png');
  cisne = loadImage('cisne2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(img);
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

  fill(255);
  textSize(10);
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

  imageMode(CENTER);
  image(video,windowWidth/2,windowHeight/2 - 35,220,150);
  imageMode(CENTER);
  image(cisne,windowWidth/2 + 3,windowHeight/2 + 30,600,600);


 //  if (sound[0].isPlaying()){
 //    image(hada, windowWidth-60, 200,100,100);
 //  } else if (sound[1].isPlaying()){
 //    image(osito,100,300,100,100);
 //  } else if (sound[2].isPlaying()){
 //    image(bellver,WindowWidth-50,windowHeight-20,400,300);
 // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
