class Obstacle {
  constructor(x, y, width, height) {
    var options = {
        'density' : 2.0,
        'friction': 0.3,
        'restitution':0.3
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  show(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};