const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var rope , rope1
var box , box1 ,box2 ,box3 ,box4 ,box5 ,box6 ,box7 ,box8 ,box9 ,box10 ,box11 ,box12,box13 ,box14 ,box15 ,box16 ,box17 ,box18 ,
box19 ;
var hero , monster;
var backgroundImg ;
function preload(){
backgroundImg = loadImage("image/background.png")
}
function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,600,1500,20);
  box = new Box(900,100,70,70);
  box1 = new Box(900,100,70,70);
  box2 = new Box(900,100,70,70);
  box3 = new Box(900,100,70,70);
  box4 = new Box(900,100,70,70);
  box5 = new Box(900,100,70,70);
  box6 = new Box(900,100,70,70);
  box7 = new Box(800,100,70,70);
  box8 = new Box(800,100,70,70);
  box9 = new Box(800,100,70,70);
  box10 = new Box(800,100,70,70);
  box11 = new Box(800,100,70,70);
  box12 = new Box(800,100,70,70);
  box13 = new Box(700,100,70,70);
  box14 = new Box(700,100,70,70);
  box15 = new Box(700,100,70,70);
  box16 = new Box(700,100,70,70);
  box17 = new Box(700,100,70,70);
  box18 = new Box(700,100,70,70);
  box19 = new Box(700,100,70,70);
 hero = new Hero(400,200,160,60);
  monster = new Monster(1100,200,160,60);
rope = new Rope(hero.body,{x:275,y:50});
rope1 = new Rope(monster.body,{x:1100,y:50});
  //log6 = new Log(230,180,80, PI/2);   
}
function draw(){
    background(backgroundImg);
    ground.display();
    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    hero.display();
    monster.display();
    realse()

 Engine.update(engine);
        //strokeWeight(4);

    //log6.display();
}
function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
function realse(){
  if(monster.body.velocity.x>0.1||monster.body.velocity.x<-0.1){
  rope1.remove();
  console.log("hello")
  }
}