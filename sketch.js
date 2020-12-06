const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var gamestate = 0;
var titleImage, title;
var buttonNotPressed, buttonPressed, button, buttonBody;
var cubeImage;
var backGroundImage;
var portalImage1, portalImage2;
var underGroundImage;
var cubeRocketImage;
var spikeImage;
var coinImage;
var floor4Image;

var floorGroup, obstaclesGroup, spikeGroup, jumpingPointGroup, wallGroup;
var floor1, floor5, floor11, floor12, floor13, floor18, floor19, floor20, floor21, floor22;
var floor2, floor3, floor4, floor6, floor7, floor8, floor9, floor10, floor14, floor15, floor16, floor17;
var wall1, wall2, wall3, wall4, wall5, wall6;
var spikeFloor1;
var jumpingPoint1, jumpingPoint2, jumpingPoint3, jumpingPoint4;
var portal, portal2;
var endPortal1, endPortal2, endPortal3, endPortal4, endPortal5;
var coin1;
var cubeRocket;
var cube;

function preload(){
    titleImage = loadImage("Images/Title.png");
    buttonNotPressed = loadImage("Images/StartNotPressed.jpg");
    buttonPressed = loadImage("Images/StartPressed.jpg");
    cubeImage = loadImage("Images/Cube.png")
    backGroundImage = loadImage("Images/Walls.jpg")
    portalImage1 = loadImage("Images/Portal2.jpg");
    portalImage2 = loadImage("Images/Portal.jpg");
    cubeRocketImage = loadImage("Images/Rocket.jpg");
    spikeImage = loadImage("Images/Spike Image.png");
    coinImage = loadImage("Images/Coin.jpg");
    floor4Image = loadImage("Images/Floor4.jpg");
}

function setup(){
    createCanvas(displayWidth, displayHeight - 145);
    engine = Engine.create();
    world = engine.world;

    button = createSprite(displayWidth/2, 400, 150, 75);
    button.addImage("button", buttonNotPressed);
    button.scale = 0.2;

    title = createSprite(displayWidth/2, 200);
    title.addImage("title", titleImage);

    floorGroup = new Group();
    obstaclesGroup = new Group();
    spikeGroup = new Group();
    spikeFloorGroup = new Group();
    jumpingPointGroup = new Group();
    wallGroup = new Group();
    
    floor1 = createSprite(100,500,2000,20);
    floor1.shapeColor = "blue";
    floor1.visible = false;

    floor2 = createSprite(1110,540,20,100);
    floor2.shapeColor = "red";
    obstaclesGroup.add(floor2);

    floor3 = createSprite(1170,580,100,20);
    floor3.shapeColor = "red";
    obstaclesGroup.add(floor3);

    floor4 = createSprite(1230,540,20,100);
    floor4.shapeColor = "red";
    obstaclesGroup.add(floor4);

    floor5 = createSprite(1740,500,1000,20);
    floor5.shapeColor = "blue";
    floorGroup.add(floor5);

    floor6 = createSprite(1390,440,100,100);
    floor6.shapeColor = "red";
    obstaclesGroup.add(floor6);

    floor7 = createSprite(1590,390,100,200);
    floor7.shapeColor = "red";
    obstaclesGroup.add(floor7);

    floor8 = createSprite(1790,340,100,300);
    floor8.shapeColor = "red";
    obstaclesGroup.add(floor8);

    floor9 = createSprite(1990,390,100,200);
    floor9.shapeColor = "red";
    obstaclesGroup.add(floor9);

    floor10 = createSprite(2190,440,100,100);
    floor10.shapeColor = "red";
    obstaclesGroup.add(floor10);

    floor11 = createSprite(2230,590,20,200);
    floor11.shapeColor = "blue";
    floorGroup.add(floor11);

    floor12 = createSprite(2720,700,1000,20);
    floor12.shapeColor = "blue";
    floorGroup.add(floor12);

    floor13 = createSprite(3210,590,20,200);
    floor13.shapeColor = "blue";
    floorGroup.add(floor13);

    floor14 = createSprite(2365,415,100,20);
    floor14.shapeColor = "red";
    obstaclesGroup.add(floor14);

    floor15 = createSprite(2540,315,100,20);
    floor15.shapeColor = "red";
    obstaclesGroup.add(floor15);

    floor16 = createSprite(2715,215,100,20);
    floor16.shapeColor = "red";
    obstaclesGroup.add(floor16);

    floor17 = createSprite(2890,115,100,20);
    floor17.shapeColor = "red";
    obstaclesGroup.add(floor17);

    floor18 = createSprite(3720,500,1000,20);
    floor18.shapeColor = "blue";
    floorGroup.add(floor18);

    floor19 = createSprite(4210,440,20,100);
    floor19.shapeColor = "blue";
    floorGroup.add(floor19);

    floor20 = createSprite(4470,400,500,20);
    floor20.shapeColor = "blue";
    floorGroup.add(floor20);

    floor21 = createSprite(4210,125,20,250);
    floor21.shapeColor = "blue";
    floorGroup.add(floor21);

    floor22 = createSprite(4470,240,500,20);
    floor22.shapeColor = "blue";
    floorGroup.add(floor22);

    wall1 = createSprite(5070,175,20,350);
    wall1.shapeColor = "red";
    wallGroup.add(wall1);

    wall2 = createSprite(5070,625,20,200);
    wall2.shapeColor = "red";
    wallGroup.add(wall2);

    wall3 = createSprite(5505,75,20,150);
    wall3.shapeColor = "red";
    wallGroup.add(wall3);

    wall4 = createSprite(5505,517.5,20,450);
    wall4.shapeColor = "red";
    wallGroup.add(wall4);

    wall5 = createSprite(5940,125,20,250);
    wall5.shapeColor = "red";
    wallGroup.add(wall5);

    wall6 = createSprite(5940,600,20,400);
    wall6.shapeColor = "red";
    wallGroup.add(wall6);
    
    spikeFloor1 = createSprite(500,500,500,500);
    spikeFloor1.addImage("floor4Image", floor4Image);
    spikeFloorGroup.add(spikeFloor1);

    jumpingPoint1 = createSprite(3250,350,25,20);
    jumpingPoint1.shapeColor = "red"
    jumpingPointGroup.add(jumpingPoint1);

    jumpingPoint2 = createSprite(3490,350,25,20);
    jumpingPoint2.shapeColor = "red";
    jumpingPointGroup.add(jumpingPoint2);

    jumpingPoint3 = createSprite(3750,350,25,20);
    jumpingPoint3.shapeColor = "red";
    jumpingPointGroup.add(jumpingPoint3);

    jumpingPoint4 = createSprite(4050,430,25,20);
    jumpingPoint4.shapeColor = "red";
    jumpingPointGroup.add(jumpingPoint4);

    floorGroup.setVisibleEach(false);
    obstaclesGroup.setVisibleEach(false);
    spikeGroup.setVisibleEach(false);
    spikeFloorGroup.setVisibleEach(false);
    jumpingPointGroup.setVisibleEach(false);

    coin1 = createSprite(5280,600,20,20);
    coin1.addImage("coinImage", coinImage);
    coin1.scale = 0.6;
    coin1.visible = false;

    cube = createSprite(200,465,50,50);
    cube.visible = false;
    cube.addImage("cubeImage", cubeImage);
    cube.scale = 0.08;

    cubeRocket = createSprite(cube.x,cube.y,50,50);
    cubeRocket.visible = false;
    cubeRocket.addImage("cubeRocketImage", cubeRocketImage);
    cubeRocket.scale = 0.2;

    portal = createSprite(75,425,100,150);
    portal.addImage("portal1", portalImage1);
    portal.visible = false;

    portal2 = createSprite(4520,330,100,150);
    portal2.addImage("portal2", portalImage2);
    portal2.visible = false;

    endPortal1 = createSprite(6300,330,100,150);
    endPortal1.addImage("portal3", portalImage2);
    endPortal1.visible = false;

    endPortal2 = createSprite(6300,220,100,150);
    endPortal2.addImage("portal4", portalImage2);
    endPortal2.visible = false;

    endPortal3 = createSprite(6300,125,100,150);
    endPortal3.addImage("portal5", portalImage2);
    endPortal3.visible = false;

    endPortal4 = createSprite(6300,440,100.150);
    endPortal4.addImage("portal6", portalImage2);
    endPortal4.visible = false;
    
    endPortal5 = createSprite(6300,535  ,100,150);
    endPortal5.addImage("portal7", portalImage2);
    endPortal5.visible = false;
}

function draw(){
    background(backGroundImage);
    Engine.update(engine);
    drawSprites();
    imageMode(CENTER);

    cube.collide(floorGroup);
    cube.collide(obstaclesGroup);
    cube.collide(spikeGroup);
    cube.collide(floor1);
    cube.collide(wallGroup);
    cube.collide(jumpingPointGroup);
    cubeRocket.collide(wallGroup);
    
    if(mouseIsOver(button)){
        button.addImage("button", buttonPressed);
    }

    if(mousePressedOver(button)){
        button.destroy();
        title.destroy();
        gamestate = 1;
    }

    if(gamestate === 1){
        cube.visible = true;
        portal.visible = true;
        portal.velocityX = -7;
        portal2.visible = true;
        portal2.velocityX = -7;
        endPortal1.visible = true;
        endPortal1.velocityX = -7;
        endPortal2.visible = true;
        endPortal2.velocityX = -7;
        endPortal3.visible = true;
        endPortal3.velocityX = -7;
        endPortal4.visible = true;
        endPortal4.velocityX = -7;
        endPortal5.visible = true;
        endPortal5.velocityX = -7;
        floor1.visible = true;
        floor1.velocityX = -7;
        coin1.visible = true;
        coin1.velocityX = -7;
        floorGroup.setVisibleEach(true);
        floorGroup.setVelocityXEach(-7);
        obstaclesGroup.setVisibleEach(true);
        obstaclesGroup.setVelocityXEach(-7);
        spikeGroup.setVisibleEach(true);
        spikeGroup.setVelocityXEach(-7);
        spikeFloorGroup.setVisibleEach(true);
        spikeFloorGroup.setVelocityXEach(-7);
        jumpingPointGroup.setVisibleEach(true);
        jumpingPointGroup.setVelocityXEach(-7);
        wallGroup.setVisibleEach(true);
        wallGroup.setVelocityXEach(-7);
    }

    if(keyWentDown(32)){
        cube.velocityY = -15;
    }

    cube.velocityY = cube.velocityY + 0.8;

    if(cube.x > portal2.x){
        gamePhysicsChange();
    }

    if(cube.x<0 || cube.y<0 || cube.y>600){
        gamestate = 2;
    }

    if(cubeRocket.isTouching(endPortal1) || cubeRocket.isTouching(endPortal3) || cubeRocket.isTouching(endPortal4) || cubeRocket.isTouching(endPortal5)){
        gamestate = 2;
    }

    if(gamestate === 2){
        portal.velocityX = 0;  
        portal2.velocityX = 0;
        endPortal1.velocityX = 0;
        endPortal2.velocityX = 0;
        endPortal3.velocityX = 0;
        endPortal4.velocityX = 0;
        endPortal5.velocityX = 0;
        floor1.velocityX = 0;
        coin1.velocityX = 0;
        floorGroup.setVelocityXEach(0);
        obstaclesGroup.setVelocityXEach(0);
        spikeGroup.setVelocityXEach(0);
        spikeFloorGroup.setVelocityXEach(0);
        jumpingPointGroup.setVelocityXEach(0);
        wallGroup.setVelocityXEach(0);
    }
} 

function gamePhysicsChange(){

    cube.visible = false;
    cubeRocket.visible = true;

    if(keyDown("space")){
        cubeRocket.velocityY = -15;                 
    }
    
    cubeRocket.velocityY = cubeRocket.velocityY + 0.8;
    
    cubeRocket.collide(floorGroup);

    drawSprites();
}
