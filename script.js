const WIDTH = 800
const HEIGHT = 800

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

let circles = [];

function draw() {
  background(0)
  for (let i = 0; i < circles.length; i++) {
    circles[i].render()
  }

  if (mouseIsPressed) {
    circles.push(new Circle(randomColor(), [mouseX, mouseY]))
  }
}

function randomColor() {
  return [
    Math.ceil(random() * 200 + 55),
    Math.ceil(random() * 200 + 55),
    Math.ceil(random() * 200 + 55)
  ]
}
function randomDirection() {
  Math.ceil(random() * 360)
}

class Circle {
  constructor(color, position) {
    this.color = color;
    this.position = position;
  }

  updatePosition() {
    this.position[0] += 10
    this.position[1] += 10
  }

  render() {
    this.updatePosition()
    fill(...this.color)
    ellipse(...this.position, 80, 80);
  }
}
