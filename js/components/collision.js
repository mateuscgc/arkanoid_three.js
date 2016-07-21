// Collision
// --------------------------------------
ECS.Components.Collision = function( collides ){
    this.collides = (typeof collides === 'undefined') ? true : collides;

    return this;
};
ECS.Components.Collision.prototype.name = 'collision';
