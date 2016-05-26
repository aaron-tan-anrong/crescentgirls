function preload() {

    game.load.image();
    // Load your images as usual.
    
}

function create() {
    // Add your sprite as usual as well.
    var sprite = game.add.sprite(x, y, 'sprite');
    
    // Enable input for the sprite, as usual.
    sprite.inputEnabled = true;

    // Enable dragging for the sprite.
    sprite.input.enableDrag(true);

}