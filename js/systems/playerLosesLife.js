/* =========================================================================
 *
 * playerLosesLife.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - playerLosesLife
// --------------------------------------
ECS.systems.playerLosesLife = function ( player, ball ) {
    // Here, we've implemented systems as functions which take in an array of
    // entities. An optimization would be to have some layer which only
    // feeds in relevant entities to the system, but for demo purposes we'll
    // assume all entities are passed in and iterate over them.
    if ( ( ball.components.position.vector.y + ball.components.appearance.radius ) <= 0 ) {
        player.components.health.current -= 1;

        if( player.components.health.current > 0) {
            ball.components.position = new ECS.Components.Position();
            ball.components.moviment = new ECS.Components.Moviment();
        } else {
            console.log('bla0');
            ECS.game.endGame( player, 'defeat' );
        }
    }
};
