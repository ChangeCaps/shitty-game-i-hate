const MenuOptionWidthX = 100;
const MenuOptionWidthY = 30;

class MainMenu{


    //
    // methods
    //

    setup() {

    }

    draw() {
        textSize(24);
        // Title
        rect()
        fill(255);
        text('Video Game: School is bad',230,100);
    
        textSize(14);  
        // New game

        fill(255);
        text('New game',340,300);
    
        // Quit game

        fill(255);
        text('Fuck off',350,450);
    
        return this;
    }
}