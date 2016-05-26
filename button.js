function preload(){
    game.load.image('button','assets/...');
    // Preload the image you want to use as a button the usual way.
}
function create(){
    testButton= game.add.button(0,0,'button',onClick,this);
                        //      x,y,name,functionName,this    
}
function onClick(){
    // Here is where you code the event when above button is clicked.  
}