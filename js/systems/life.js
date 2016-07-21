/* =========================================================================
 *
 * life.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - Life
// --------------------------------------
ECS.systems.life = function ( entities, player ) {
    // Here, we've implemented systems as functions which take in an array of
    // entities. An optimization would be to have some layer which only
    // feeds in relevant entities to the system, but for demo purposes we'll
    // assume all entities are passed in and iterate over them.

    var curEntity;

    // iterate over all entities
    for( var entityId in entities ) {
        curEntity = entities[entityId];

        // Only run logic if entity has relevant components
        //
        // For rendering, we need appearance and position. Your own render
        // system would use whatever other components specific for your game
        if( curEntity.components.health ) {

            if ( curEntity.components.health.alive
                 && curEntity.components.health.current <= 0
                 && curEntity.id != player.id) {
                player.components.score.current += curEntity.components.health.max;
            }

            curEntity.components.health.alive = ( curEntity.components.health.current > 0 );

            if( curEntity.components.appearance )
                curEntity.components.appearance.visible = curEntity.components.health.alive;

            if( curEntity.components.collision )
                curEntity.components.collision.collides = curEntity.components.health.alive;

            if( curEntity.components.moviment )
                curEntity.components.moviment.moving = curEntity.components.health.alive;


        }
    }
};
