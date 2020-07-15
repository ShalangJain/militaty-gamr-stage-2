var canvas
var backgroundimage
var gameState = "intro"
var goodmissileman, goodrifle, goodsniper, goodtank
var badmissileman, badrifle, badsniper, badtank
var badbullet, badmissile, cannonball, goodbullet, goodmissile
var halfsmileleader, mouthopenleader,notalkleader, smileleader
var backdropimage
var video
var bulletGroup


function preload (){
  lvl1ally1 = loadImage ("good army/goodmissileman.png")
  lvl1ally2 = loadImage ("good army/goodrifle.png")  
  lvl1ally3 = loadImage("good army/goodsniper.png")
  lvl1ally4 = loadImage ("good army/goodtank.png")

  lvl1obs1 = loadImage ("enemy army/badmissileman.png")
  lvl1obs2 = loadImage("enemy army/badrifle.png")
  lvl1obs3 = loadImage("enemy army/badsniper.png")
  lvl1obs4 = loadImage("enemy army/badtanker.png")

  goodbulletimg = loadImage("ammunation/goodbullet.png")
  goodmissileimg = loadImage("ammunation/goodmissile.png")
  cannonballimg = loadImage("ammunation/cannonball.png")
  badbulletimg = loadImage("ammunation/badbullet.png")
  badmissile = loadImage ("ammunation/badmissile.png")

  leadertalking = loadAnimation ("leader/notalkleader.png","leader/notalkleader.png", "leader/mouthopenleader.png", "leader/halfsmileleader.png",)

  backdropimage = loadImage("war image day.png")
 

}

 

function setup(){
   
  //if(gameState == 0){
  //  noCanvas();
 // }
  canvas = createCanvas(displayWidth - 100, displayHeight-110);
  bulletGroup = new Group()
  //  video = createVideo("video.mp4" )

}
function draw(){
   background(backdropimage)
   drawSprites()
   if (gameState === "intro"){
 
   intro()
   
}
if (keyDown ("space")&& gameState ==="intro"){
  gameState = "lvl1"
  lvl1();
}
createBullet(500);
console.log(createBullet);


}


function land(){
    

}
function keyPressed(){
  if (keyCode === 32){
    gameState = "instructions"
  }
}
//function createVideo() {
 // vid.loop();
//vid.volume(0);

function intro(){
  //var leader = createSprite(1300,750)
  //leader.addImage("leader",leadertalking)
  animation(leadertalking, 1200,680)
 // console.log(leader)
  
}
function lvl1(){

}

function lvl2(){

}

function lvl3(){

}
function spwnobslvl1(){

  
}

function createBullet(x) {
  if (frameCount% 60 ===0){

  
  var bullet= createSprite(200, 500, 5, 10);
  bullet.addImage("bullet",goodbulletimg)
  bullet.y = 360;
  bullet.x = x;                                           
  bullet.shapeColor = "blue";
  bullet.velocityX = 6;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
}
}