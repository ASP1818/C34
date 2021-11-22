class tree {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
      
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height);
        this.image = loadImage("tree.jpg");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translaste(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

    
}