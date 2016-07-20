/* =========================================================================
 *
 * render.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - Render
// --------------------------------------
ECS.systems.render = function systemRender ( entities ) {
    // Here, we've implemented systems as functions which take in an array of
    // entities. An optimization would be to have some layer which only
    // feeds in relevant entities to the system, but for demo purposes we'll
    // assume all entities are passed in and iterate over them.

    var curEntity, fillStyle;

    var cx,cy,width,height;

    // iterate over all entities
    for( var entityId in entities ) {
        curEntity = entities[entityId];

        // Only run logic if entity has relevant components
        //
        // For rendering, we need appearance and position. Your own render
        // system would use whatever other components specific for your game
        if( curEntity.components.appearance && curEntity.components.position ){
            var shape = curEntity.components.appearance.shape;


            var geometry;
            if(shape === 'rectangle') {
                geometry = new THREE.PlaneBufferGeometry(
                            curEntity.components.appearance.width,
                            curEntity.components.appearance.height);
            } else if(shape === 'circle') {
                geometry = new THREE.CircleGeometry(curEntity.components.appearance.radius, 32);
            }


            material = new THREE.MeshBasicMaterial(
                            {
                                color: curEntity.components.appearance.color,
                                side: THREE.DoubleSide
                            });

            mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            mesh.position.set(curEntity.components.position.x, curEntity.components.position.y, 0);

        }
    }

    renderer.clear();
    renderer.render(scene, camera);
};
