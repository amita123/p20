var tom, jerry, img1, img2, img3, img4, img5, img6
var bg
function preload() {
    //load the images here
    img1 = loadAnimation("images/cat1.png");
    img2 = loadAnimation("images/mouse1.png");
    img3 = loadAnimation("images/mouse2.png", "images/mouse2");
    img4 = loadAnimation("images/cat2.png", "images/cat3.png");
    img5 = loadAnimation("images/mouse4.png");
    img6 = loadAnimation("images/cat4.png");
    bg = loadImage("images/garden");
    

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addAnimation(img1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation(img2);
    jerry.scale = 0.10
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x = jerry.x < (tom.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomimg",img6)
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomimg");
        jerry.addAnimation("jerryimg",img5);
        jerry.scale = 0.10;
        jerry.changeAnimation("jerryimg");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addImage("tomRunning",img4);
        tom.changeAnimation("tomRunning");

        jerry.addImage("jerryRunning",img3);
        jerry.changeAnimation("jerryRunning");
    }

}
