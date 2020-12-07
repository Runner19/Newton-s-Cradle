const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var C = Matter.Constraint;
var RealRect1, RealRect2, RealRect3, RealRect4, RealRect5, Sling1, Sling2, Sling3, Sling4;
var Sling5, mConstraint, roof;

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
    mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

	//Bodies
	RealRect1 = new Ball(500, 450, "red");
    RealRect2 = new Ball(560, 450, "green");
    RealRect3 = new Ball(620, 450, "orange");
    RealRect4 = new Ball(680, 450, "blue");
	RealRect5 = new Ball(740, 450, "yellow");

    roof = new Roof(625, 200);
	
	Sling1 = new RopeSling(RealRect1.body, { x: 500, y: 200 });
    Sling2 = new RopeSling(RealRect2.body, { x: 560, y: 200 });
    Sling3 = new RopeSling(RealRect3.body, { x: 620, y: 200 });
    Sling4 = new RopeSling(RealRect4.body, { x: 680, y: 200 });
    Sling5 = new RopeSling(RealRect5.body, { x: 740, y: 200 });

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  RealRect1.display();
  RealRect2.display();
  RealRect3.display();
  RealRect4.display();
  RealRect5.display();
  Sling1.display();
  Sling2.display();
  Sling3.display();
  Sling4.display();
  Sling5.display();
  roof.display();
  fill("white");
}