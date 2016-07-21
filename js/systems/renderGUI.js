/* =========================================================================
 *
 * renderGUI.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - RenderGUI
// --------------------------------------
ECS.systems.renderGUI = function ( player ) {
    // Here, we've implemented systems as functions which take in an array of
    // entities. An optimization would be to have some layer which only
    // feeds in relevant entities to the system, but for demo purposes we'll
    // assume all entities are passed in and iterate over them.

    if( player.components.gui.score )
        player.components.gui.score.innerHTML = player.components.score.current;

    if( player.components.gui.lives )
        player.components.gui.lives.innerHTML = Math.max( player.components.health.current - 1, 0 );
};
