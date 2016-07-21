/* =========================================================================
 *
 * moviment.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - Moviment
// --------------------------------------
ECS.systems.moviment = function ( entities ) {
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
        if( curEntity.components.moviment
            && curEntity.components.moviment.moving ) {

            var angle = curEntity.components.moviment.angle;
            var speed = curEntity.components.moviment.speed;

            curEntity.components.position.vector.add( new THREE.Vector3( speed * Math.cos(angle), speed * Math.sin(angle), 0 ));
        }
    }
};
