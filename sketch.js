//Create variables here
var dog, happydog, food, foodstock, database;

function preload()
{
  //load images here
  dogImage = loadImage("dog.png");
  happydogImage = loadImage("doghappy.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodstock = database.ref('Food');
  foodstock.on("value",readStock);
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImage);
  

  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happydogImage);

  }

  drawSprites();

  text("Note: Press UP_ARROW to feed drago milk", 100, 450);
  //add styles here

}

function readStock(data){
food = data.val();
}

function writeStock(x){
database.ref('/').update({
  Food:x
}

)
}



