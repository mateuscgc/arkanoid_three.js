/* =========================================================================
 *
 * game.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */
ECS.Game = function Game (){
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
    paddle = new ECS.Assemblages.CollisionRect();
    paddle.addComponent( new ECS.Components.Health({ initial: 3 }) );
    paddle.components.appearance.color = 0xffffff;
    paddle.components.appearance.width = ECS.Constants.BRICK_WIDTH * 2;
    paddle.components.appearance.height = ECS.Constants.BRICK_HEIGHT * 1.2;
    paddle.components.position.x = 50;
    paddle.components.position.y = 8;

    entities[paddle.id] = paddle;


    // Create Ball
    ball = new ECS.Assemblages.Circle();
    entities[ball.id] = ball;


    // store reference to entities
    ECS.entities = entities;

    // Setup systems
    // ----------------------------------
    // Setup the array of systems. The order of the systems is likely critical,
    // so ensure the systems are iterated in the right order
    var systems = [
        // ECS.systems.userInput,
        // ECS.systems.collision,
        // ECS.systems.decay,
        ECS.systems.render
    ];

    // Game loop
    // ----------------------------------
    function gameLoop (){
        // Simple game loop
        for(var i=0,len=systems.length; i < len; i++){
            // Call the system and pass in entities
            // NOTE: One optimal solution would be to only pass in entities
            // that have the relevant components for the system, instead of
            // forcing the system to iterate over all entities
            systems[i](ECS.entities);
        }

        // Run through the systems.
        // continue the loop
        // if(self._running !== false){
            // requestAnimationFrame(gameLoop);
        // }
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
