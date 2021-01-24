var garden,tom,jerry,gardenImage
var jerryStart,tomStart
var jerryTease,tomWalk
var jerryEnd,tomEnd
function preload() {
    //load the images here,p
    gardenImage=loadImage ("garden.png")
    tomStart=loadImage("cat1.png");
    jerryStart=loadImage("mouse1.png");
    tomWalk=loadAnimation ("cat2.png","cat3.png")
    jerryTease=loadImage ("mouse2.png","mouse3.png")
    tomEnd=loadAnimation("cat4.png");
    jerryEnd=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400,20,20);
    garden.addImage ("gardenImage",gardenImage)
    garden.scale=1.2

    //create tom and jerry sprites here
    tom=createSprite(825,675,20,20);
    tom.addImage ("tomstart",tomStart)
    tom.scale=0.2
    jerry=createSprite(175,700,20,20);
    jerry.addImage ("jerrystart",jerryStart)
    jerry.scale=0.1
    





}

function draw() {

    background(255);
    keyPressed();

    
    

    //Write condition here to evalute if tom and jerry collide
    if (tom.x-jerry.x < (tom.width - jerry.width)/2){
     tom.addAnimation ("tomEnd",tomEnd)
     tom.changeAnimation("tomEnd")
     jerry.addAnimation ("jerryEnd",jerryEnd)
     jerry.changeAnimation("jerryEnd")
     tom.velocityX=0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
tom.velocityX=-4;
tom.addAnimation ("catWalking",tomWalk);
tom.changeAnimation ("catWalking")
jerry.addAnimation("mouseTeasing",jerryTease)
jerry.changeAnimation("mouseTeasing")
  }
}
