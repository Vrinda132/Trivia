var bg, pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8;
var pl1img, pl2img, pl3img, pl4img, pl5img, pl6img, pl7img, pl8img;
var character, characterImg;
var planetState = 0;
var bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8;
var result = true;
var ans = '';
function preload() {
    bg = loadImage("./assets/background.png");
    pl1img = loadImage("./assets/pl.png");
    pl2img = loadImage("./assets/pl2.png");
    pl3img = loadImage("./assets/pl3.png");
    pl4img = loadImage("./assets/pl4.png");
    pl5img = loadImage("./assets/pl5.png");
    pl6img = loadImage("./assets/pl6.png");
    pl7img = loadImage("./assets/pl7.png");
    pl8img = loadImage("./assets/pl8.png");
    characterImg = loadImage("./assets/CharacBoy.png");
    bg1 = loadImage("./assets/bg1.jpg");
    bg2 = loadImage("./assets/bg2-.jpg");
    bg3 = loadImage("./assets/bg3.jpg");
    bg4 = loadImage("./assets/bg4.jpg");
    bg5 = loadImage("./assets/bg5.png");
    bg6 = loadImage("./assets/bg6.jpg");
    bg7 = loadImage("./assets/bg7.jpg");
    bg8 = loadImage("./assets/bg8.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pl1 = createSprite(width/3-330, height/3-100);
  pl1.addImage(pl1img);
  pl1.scale = 0.6;

  pl2 = createSprite(width/3-120, height/2+170);
  pl2.addImage(pl2img);
  pl2.scale = 0.6;

  pl3 = createSprite(width/3+100, height/3-100);
  pl3.addImage(pl3img);
  pl3.scale = 0.28;

  pl4 = createSprite(width/2, height/2+170);
  pl4.addImage(pl4img);
  pl4.scale = 0.6;

  pl5 = createSprite(width/2+200, height/3-100);
  pl5.addImage(pl5img);
  pl5.scale = 0.6;

  pl6 = createSprite(width/2+300, height/2+170);
  pl6.addImage(pl6img);
  pl6.scale = 0.8;

  pl7 = createSprite(width/2+500, height/3-100);
  pl7.addImage(pl7img);
  pl7.scale = 1.1;

  pl8 = createSprite(width/2+600, height/2+170);
  pl8.addImage(pl8img);
  pl8.scale = 1.3;
  
  character=createSprite(100, height/2+200);
  character.addImage(characterImg);
  character.scale=0.3;
}

function draw() {
  if(planetState === 0){
    background(bg);
    drawSprites();
  }

  if(character.isTouching(pl1)){
    setInterval(()=>{planetState=1;}, 3000)
  }

  planetState1();
  planetState2();
  planetState3();
  console.log(planetState);
}

function mouseClicked() {
  if(planetState === 0) {
    character.x = width/3-300;
    character.y = height/3-100;
  }
}


function planetState1() {
  if(planetState === 1){
    background(bg1);
    while(result){
      instructions();
      setInterval(function(){
        swal.close()
      },2000)
      result=false;
    }
    question1 = new Question("What has to be broken before you can use it?", "egg",2);
    question1.display();

    if(ans=="egg"){  
    planetState=2;
    delete(planetState);
    planetState2();
    }
  }
}


function planetState2() {
   if(planetState === 2) {
     console.log("entered");
    background(bg2);
    instructions2();  
    question2 = new Question("What goes up but never comes down ?", "age",3);
    question2.display();
    if(ans=="age"){
    planetState=3;
    planetState3();
    }
  }
}


function planetState3() {
  if(planetState === 3){
    background(bg3);

    question3 = new Question("I shave every day, but my beard stays the same. What am I??", "barber", 4);
    question3.display();
    if(ans=="barber"){
    planetState=4;
    }
  }
}












function instructions() {
  swal({
    title: `Welcome to Planet ${planetState}`,
    text: '',
    text: `Write the answer in text inputbox.
     Then press on check button to move on to the next level`,
    showConfirmButton:false,

  });
}

function instructions2() {
  swal({
    title: `Congratulations`,
    text:`You did great on the previous planet... !  
    Let's see if you can tackle this`,
    showConfirmButtontext: `Let's do it `,
  });
}