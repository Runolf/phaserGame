const config = {
    width: 1000,
    height: 3000,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {y: 400}
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
}

let dude;
let cursors;

var game = new Phaser.Game(config);

function preload(){
    this.load.image('dude', 'img/Woodies.png');
}

function create() {
    //this.add.image(500,300,'dude');
    dude = this.physics.add.image(500,300,'dude');
    dude.body.collideWorldBounds = true;
    cursors = this.input.keyboard.createCursorKeys();

}

function update() {
    if(cursors.up.isDown) {
        dude.setVelocity(0,-300);
    }

    if(cursors.right.isDown){
        dude.setVelocity(300, 0);
    }
    
    if(cursors.left.isDown){
        dude.setVelocity(-300,0);
    }

    if(cursors.down.isDown){
        dude.setVelocity(0,500);
    }
}

