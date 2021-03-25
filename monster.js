class Monster{
    constructor(x, y, width, height,angle) {
        var options = {
            'frictionAir':0.005,
            'density':1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("image/monster.png")
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       image(this.image,0,0,this.width,this.width)
       pop();
      }
}