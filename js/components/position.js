// Position
// --------------------------------------
ECS.Components.Position = function( params ){
    params = params || {};

    this.vector = new THREE.Vector3(
                        (typeof params.x === 'undefined') ? 50 : params.x,
                        (typeof params.y === 'undefined') ? 50 : params.y
                        );
    return this;
};
ECS.Components.Position.prototype.name = 'position';
