const MenuOptionWidthX = 100;
const MenuOptionWidthY = 30;

class MainMenu{
    play_button = new Button();

    //
    // methods
    //

    setup() {
        this.play_button.position = new Vector(400, 400);
        this.play_button.size = new Vector(40, 30);

        console.log(this.play_button);
    }

    draw() {
        textSize(24);
        // Title
    
        fill(255);
        text('Video Game: School is bad',230,100);
    
        textSize(14);  
        // New game

        this.play_button.draw();
    
        // Quit game

        fill(255);
        text('Fuck off',350,450);
    
        return this;
    }
}