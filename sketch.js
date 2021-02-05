
var player

var laser1, laser2, laser3

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15
block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,
block30

var exit


function setup(){
createCanvas(800,625);

player = createSprite(730,580,25,25)

exit = createSprite(300,10,50,90)

block1 = createSprite(750,510,150,15);
block2 = createSprite(570,600,15,300);
block3 = createSprite(610,560,90,15);
block4 = createSprite(640,410,15,90);
block5 = createSprite(660,360,110,15);
block6 = createSprite(710,280,15,170);
block7 = createSprite(560,190,320,15);
block8 = createSprite(640,130,15,120);
block9 = createSprite(610,70,200,15);
block10 = createSprite(510,40,15,80);
block11 = createSprite(730,270,50,15);
block12 = createSprite(700,100,15,50);
block13 = createSprite(500,450,160,15);
block14 = createSprite(420,490,15,90);
block15 = createSprite(625,280,15,70);
block16 = createSprite(560,310,150,15);
block17 = createSprite(480,360,280,15);
block18 = createSprite(350,470,15,210);
block19 = createSprite(450,530,80,15);
block20 = createSprite(450,590,80,15);
block21 = createSprite(480,610,15,50);
block21 = createSprite(420,610,15,50);
block22 = createSprite(300,570,100,15);

block23 = createSprite(250,450,15,260);









}

function draw(){
background("lightBlue")
text(mouseX +","+mouseY,mouseX,mouseY)

if(keyDown(UP_ARROW)){
player.y = player.y -7
}
if(keyDown(DOWN_ARROW)){
player.y = player.y + 7
}
if(keyDown(RIGHT_ARROW)){
player.x = player.x +7
}
if(keyDown(LEFT_ARROW)){
player.x = player.x -7
 }

exit.shapeColor = "brown"

player.shapeColor = "green"

player.collide(block1)
player.collide(block2)
player.collide(block3)
player.collide(block4)
player.collide(block5)
player.collide(block6)
player.collide(block7)
player.collide(block8)
player.collide(block9)
player.collide(block10)
player.collide(block11)
player.collide(block12)
player.collide(block13)
player.collide(block14)
player.collide(block15)
player.collide(block16)
player.collide(block17)
player.collide(block18)
player.collide(block19)
player.collide(block20)
player.collide(block21)






drawSprites()
}