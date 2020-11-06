const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup(){
    var canvas= createCanvas(windowWidth/2, windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    let canvasMouse = mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    let options={

        mouse: canvasMouse
    }
    mConstraint= MouseConstraint.create(engine,options);
    World.add(world,mConstraint)
    roof = new Ground(400,100);
    //ground = new Ground(400,400)
 
    bob1 = new pendulum(280,220,red);
    bob2 = new pendulum(340,220,blue);
    bob3 = new pendulum(400,220,black);
    bob4 = new pendulum(460,220,white);
    bob5 = new pendulum(520,220,pink);

    rope1 = new sling(bob1.body,roof.body);
    rope2 = new sling(bob2.body,roof.body);
    rope3 = new sling(bob3.body,roof.body);
    rope4 = new sling(bob4.body,roof.body);
    rope5 = new sling(bob5.body,roof.body);
    
}

function draw(){
    background("pink");
    Engine.update(engine);

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    roof.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

}

function mouseDragged() {
    Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
  }