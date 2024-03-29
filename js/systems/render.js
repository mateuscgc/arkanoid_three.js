/* =========================================================================
 *
 * render.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - Render
// --------------------------------------
ECS.systems.render = function ( entities ) {
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
        if( curEntity.components.appearance
            && curEntity.components.appearance.visible
            && curEntity.components.position ){

            curEntity.components.appearance.mesh.position.copy( curEntity.components.position.vector );
        } else {
            curEntity.components.appearance.mesh.position.set( -200, -200, -200 );
        }
    }

    renderer.clear();
    renderer.render(scene, camera);
};
