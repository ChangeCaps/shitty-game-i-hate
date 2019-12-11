class Button {
    position = new Vector(0, 0);
    size = new Vector(0, 0);
    text = "!!insert text!!";

    draw() {
        rect(
            this.position.x, 
            this.position.y, 
            this.size.x,
            this.size.y,
        );
    }

}