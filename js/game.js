/* =========================================================================
 *
 * game.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */
ECS.Game = function() {
    // This is our "main" function which controls everything. We setup the
    // systems to loop over, setup entities, and setup and kick off the game
    // loop.
    var self = this;

    // Create some entities
    // ----------------------------------
    var entities = {}; // object containing { id: entity  }
    var entity;

    // Create a bunch of bricks to be destroyed
    for(var h=0; h < 6; h++) {
        for(var w=0; w < 13; w++){
            entity = new ECS.Assemblages.Paper(
                            {
                                x: w*(ECS.Constants.BRICK_WIDTH + ECS.Constants.BRICK_MARGIN)
                                    + ECS.Constants.BRICK_WIDTH / 2 + ECS.Constants.BRICK_MARGIN,
                                y: 88 - h*(ECS.Constants.BRICK_HEIGHT + ECS.Constants.BRICK_MARGIN)
                                    - ECS.Constants.BRICK_HEIGHT / 2
                            });

            entities[entity.id] = entity;
        }
    }

    // PLAYER entity
    // ----------------------------------
    // Make the last entity the "PC" entity - it must be player controlled,
    // have health and collision components
    var paddle = new ECS.Assemblages.Paddle({ color:  0xf4f56f });
    entities[paddle.id] = paddle;


    // Create Ball
    ball = new ECS.Assemblages.Circle();
    ball.addComponent( new ECS.Components.Moviment() );
    entities[ball.id] = ball;


    // store reference to entities
    ECS.entities = entities;

    // Setup systems
    // ----------------------------------
    // Setup the array of systems. The order of the systems is likely critical,
    // so ensure the systems are iterated in the right order

    // Game loop
    // ----------------------------------
    function gameLoop (){
        ECS.systems.moviment(ECS.entities);
        ECS.systems.userInput(paddle);
        ECS.systems.render(ECS.entities);

        // continue the loop
        if(self._running !== false){
            requestAnimationFrame(gameLoop);
        }
    }
    // Kick off the game loop
    requestAnimationFrame(gameLoop);

    // Lose condition
    // ----------------------------------
    this._running = true; // is the game going?

    return this;
};

// Kick off the game
ECS.game = new ECS.Game();
