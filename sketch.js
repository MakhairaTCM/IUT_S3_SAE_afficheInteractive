let ratio = 2000 / 4000;
let formatL = 500;
let formatH = formatL / ratio;

let fond, plot, carrousselImg, planFond, fontNeue,son;
// let imgMaskZone, textMaskZone, textMaskZone1;

let cercles = [];
let texts = [];

let clicked = false;



function mouseClicked() {
  clicked= !clicked;
  // console.log(mouseX);
  // console.log(mouseY);
  
  
}


function preload() {
  fond = loadImage("assets/coneFond.png");
  plot = loadImage("assets/cone.png");
  carrousselImg = loadImage("assets/carrousel.png");
  fontNeue = loadFont("assets/HelveticaNeueBlack.otf");
  planFond= loadImage("assets/planFond.jpg");
  son=loadSound("assets/son.mp3")


}


function setup() {
  createCanvas(formatL, formatH);
  noSmooth();

  texts.push(new ScrollingText("12 ET 13 OCTOBRE 2024", fontNeue, 1, 30, 250));

  texts.push(new ScrollingText("13 SPECTACLES DE RUE GRATUITS - LOURDES", fontNeue, 0.5, 30, 635));

  scrollingImg = new ScrollingImage(carrousselImg, 0.7, 900, 300, 300);
 
  cercles.push(new LabeledCircle(132, 405, "1"));
  cercles.push(new LabeledCircle(135, 568, "2"));
  cercles.push(new LabeledCircle(259, 498, "3"));
  cercles.push(new LabeledCircle(248, 553, "4"));
  cercles.push(new LabeledCircle(173, 455, "5"));
  cercles.push(new LabeledCircle(300, 503, "6"));
  cercles.push(new LabeledCircle(338, 585, "7"));
  cercles.push(new LabeledCircle(254, 598, "8"));
  cercles.push(new LabeledCircle(260, 630, "9"));
  cercles.push(new LabeledCircle(316, 264, "10"));
  cercles.push(new LabeledCircle(462, 347, "11"));
}
  

function draw() {
  
  
  if (keyIsPressed === true && keyCode === 32) {
     son.loop();
  }
  
  if(!clicked){
    image(plot, 0, -22, formatL, formatH);
    for (let scrollText of texts) {
      scrollText.dessiner();
    }
    scrollingImg.dessiner();
    
    image(fond, 0, 0, formatL, formatH);

    
  }else {
    image(planFond, 0, 0, formatL, formatH);
    for (let cercle of cercles) {
      cercle.dessiner();
    }
    
  }
  
};


