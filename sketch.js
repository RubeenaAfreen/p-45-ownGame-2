var survivor;

function setup(){
    createCanvas(800,400); 

    survivor=createSprite(60,350,50,50);
    survivor.shapeColor="white"
    
}

function draw(){
    background("grey");
    if(keyDown("left")){
        survivor.x=survivor.x-5;
    }
    if(keyDown("right")){
        survivor.x=survivor.x+5;
    }
    if(keyIsDown(UP_ARROW)){
        survivor.y=survivor.y-5;
    }
    if(keyIsDown(DOWN_ARROW)){
        survivor.y=survivor.y+5;
    }
    drawSprites();
}