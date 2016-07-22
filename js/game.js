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
        ECS.systems.collision(ball, ECS.entities, paddle.id);
        ECS.systems.playerLosesLife( paddle, ball);
        ECS.systems.life(ECS.entities, paddle);
        ECS.systems.render(ECS.entities);
        ECS.systems.renderGUI(paddle);

        // continue the loop
        if(self._running !== false){
            requestAnimationFrame(gameLoop);
        }
    }
    // Kick off the game loop
    requestAnimationFrame(gameLoop);

    this._running = true;

    this.endGame = function endGame( player, result ){
        self._running = false;

        resultsGUI = document.getElementById('final_results');
        document.getElementById('final_status').innerHTML = ( result === 'victory' ) ? 'You Won!' : 'You Lost!';
        document.getElementById('final_score').innerHTML = 'Final Score: ' + player.components.score.current;
        resultsGUI.style.width = renderer.getSize().width + 'px';
        resultsGUI.style.top = (renderer.getSize().height - 200) / 2 + 'px';
        resultsGUI.style.background = ( result === 'victory' ) ? 'green' : 'red';
        resultsGUI.style.display = 'block';
    };

    return this;
};

// Kick off the game
ECS.game = new ECS.Game();
