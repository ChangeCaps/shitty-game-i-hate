const GameState = {
  MAIN_MENU: new MainMenu(),
  GAME: new Game(),
}

let game_state = GameState.MAIN_MENU;

function setup() {
  createCanvas (800,800);
  background (0);

  game_state.setup();
}

function draw() {
  game_state = game_state.draw();
}