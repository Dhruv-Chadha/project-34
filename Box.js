class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1,
            'friction':1.0,
            'density':1.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.col = random(255)
        this.col1 = random(255)
        this.col2 = random(255)

      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("green");
        fill(this.col,this.col1,this.col2);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}