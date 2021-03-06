var Hour, Minute, Second


function setup() {
  createCanvas(displayWidth,700);

  Hour = hour()
  Minute = minute()
  Second = second()

  angleMode(DEGREES)
}

function draw() {
  background(0,0,0);  

  translate(displayWidth/2,350)

  stroke(255,0,0)
  strokeWeight(7)

  Hour = hour()
  Minute = minute()
  Second = second()

  MakeArc(Hour,600,"blue", 12)
  MakeArc(Minute, 500, "white",60)
  MakeArc(Second, 400, "red",60)

  CreateClock(Hour, 600, "blue",12)
  CreateClock(Minute, 500, "white",60)
  CreateClock(Second, 400, "red",60)

  drawSprites();
}

function CreateClock(InputOfTime, Scale, Color, DividingNumber)
{
  var Angle = map(InputOfTime,0,DividingNumber,0,360)

  push()

  stroke(Color)
  rotate(Angle)
  line(0,0,100,0)
  pop()
}

function MakeArc(InputOfTime, Scale, Color, DividingNumber)
{
  var Angle = map(InputOfTime,0,DividingNumber,0,360)

  push()
  stroke(Color)
  fill("black")
  arc(0, 0, Scale, Scale, 0,Angle , QUARTER_PI);
  pop()
}
