let mobilenet;
let video;
let label;
let sound=[];

function modelready(){
  console.log('modelready');
  mobilenet.predict(video, GotResult);
}

function preload(){
  soundFormats('wav', 'ogg');
   for (let i=0; i < 9; i++){
     sound[i]= loadSound('sound'+ i +'.wav');
  }
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

  fill(random(255),random(255),random(255));
  textSize(30);
  text(label, random(windowWidth), random(windowHeight));
   if(label == 'window screen'){
    sound[0].play();
  } else if(label == 'mask'){
    sound[1].play();
  } else if(label == 'wig'){
    sound[2].play();
  }else if(label == 'ski mask'){
    sound[3].play();
  }else if(label == 'cloak'){
    sound[4].play();
  }else if(label == 'abaya'){
    sound[5].play();
  }else if(label == 'vacuum, vacuum cleaner'){
    sound[6].play();
  }else if(label == 'spotlight, spot'){
    sound[7].play();
 }else if(label == 'mouse, computer mouse'){
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
