var background;

function preload(){
    game.load.image('space','assets/images/starfield.png');
    // Preload your background image as usual.
}
function create(){
    background= game.add.tileSprite(0,0,800,600,'space');
    // Add it as a TILESPRITE.     (x,y,width,height,name)
}
function update(){
    background.tilePosition.y+=2;
    // Moves it 2px down along the y-axis every cycle.
}