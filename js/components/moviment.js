// Moviment
// --------------------------------------
ECS.Components.Moviment = function( params ){
    params = params || {};

    this.angle = (typeof params.angle === 'undefined') ? Math.PI* 1/3 : params.angle

    this.speed = (typeof params.speed === 'undefined') ? 1.5 : params.speed;

    this.moving = params.moving || true;

    return this;
};
ECS.Components.Moviment.prototype.name = 'moviment';
