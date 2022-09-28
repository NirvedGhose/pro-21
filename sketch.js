var canvas;
var music;
var box1,box2,box3,box4;
var edge;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(80,550,120,20);
box1.shapeColor = "red"
box2 = createSprite(220,550,120,20);
box2.shapeColor = "blue"
box3 = createSprite(360,550,120,20);
box3.shapeColor = "green"
box4 = createSprite(500,550,120,20);
box4.shapeColor = "orange"


    //create box sprite and give velocity
    ball = createSprite(300,400,30,30);
    ball.shapeColor = "white"
    ball.velocityX = 5;
    ball.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
ball.bounceOff(edges);
music.play();

    //add condition to check if box touching surface and make it box

    if(ball.isTouching(box1)) {
        ball.bounceOff(box1);
        ball.shapeColor = "red"
    }
    if(ball.isTouching(box2)) {
        ball.bounceOff(box2);
        ball.shapeColor = "blue"
    }
    if(ball.isTouching(box3)) {
        ball.bounceOff(box3);
        ball.shapeColor = "green"
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if(ball.isTouching(box4)) {
        ball.bounceOff(box4);
        ball.shapeColor = "orange"
    }

    drawSprites();
}
