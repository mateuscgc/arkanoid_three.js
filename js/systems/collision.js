/* =========================================================================
 *
 * collision.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

function collide( c, r ) {
    var cbx = c.components.position.vector.x;
    var cby = c.components.position.vector.y - c.components.appearance.radius;

    var ctx = c.components.position.vector.x;
    var cty = c.components.position.vector.y + c.components.appearance.radius;

    var crx = c.components.position.vector.x + c.components.appearance.radius;
    var cry = c.components.position.vector.y;

    var clx = c.components.position.vector.x - c.components.appearance.radius;
    var cly = c.components.position.vector.y;

    var rt = r.components.position.vector.y + r.components.appearance.height / 2;
    var rb = r.components.position.vector.y - r.components.appearance.height / 2;

    var rr = r.components.position.vector.x + r.components.appearance.width / 2;
    var rl = r.components.position.vector.x - r.components.appearance.width / 2;

    if( rb <= cby && cby <= rt && rl <= cbx && cbx <= rr )
        return { collide: true, side: 'bottom' };
    else if( rb <= cty && cty <= rt && rl <= ctx && ctx <= rr )
        return { collide: true, side: 'top' };
    else if ( rl <= crx && crx <= rr && rb <= cry && cry <= rt )
        return { collide: true, side: 'right' };
    else if ( rl <= clx && clx <= rr && rb <= cly && cly <= rt )
        return { collide: true, side: 'left' };

    return { collide: false };
}

function newAngle( curr, collision ) {
    if( collision.collide )
        if( collision.side === 'bottom' || collision.side === 'top' )
            return Math.PI*2 - curr;
        else if( collision.side === 'left' || collision.side === 'right' )
            return Math.PI - curr;

    return curr;
}

// ECS - System - Collision
// --------------------------------------
ECS.systems.collision = function ( ball, entities, playerId ) {
    // Here, we've implemented systems as functions which take in an array of
    // entities. An optimization would be to have some layer which only
    // feeds in relevant entities to the system, but for demo purposes we'll
    // assume all entities are passed in and iterate over them.

    var curEntity;

    var na = ball.components.moviment.angle;

    // iterate over all entities
    for( var entityId in entities ) {
        curEntity = entities[entityId];

        // Only run logic if entity has relevant components
        //
        // For rendering, we need appearance and position. Your own render
        // system would use whatever other components specific for your game
        if( curEntity.components.collision
            && curEntity.components.collision.collides
            && entityId !== ball.id ) {

            collision = collide( ball, curEntity );
            if( collision.collide ) {
                na = newAngle( na, collision );

                if( curEntity.id !== playerId ) {
                    curEntity.components.health.current -= 1;
                }
            }

            // curEntity.components.position.vector.add( new THREE.Vector3( speed * Math.cos(angle), speed * Math.sin(angle), 0 ));
        }
    }

    // Colisão com os limites do cenario
    if( ball.components.position.vector.x + ball.components.appearance.radius >= 80 )
        na = newAngle( na, { collide: true, side: 'right' });
    else if( ball.components.position.vector.x - ball.components.appearance.radius <= 0 )
        na = newAngle( na, { collide: true, side: 'left' });
    else if( ball.components.position.vector.y + ball.components.appearance.radius >= 100 )
        na = newAngle( na, { collide: true, side: 'top' });

    ball.components.moviment.angle = na;
};
