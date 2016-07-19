// Position
// --------------------------------------
ECS.Components.Position = function ComponentPosition ( params ){
    params = params || {};

    this.x = params.x || 200;
    this.y = params.y || 20;

    return this;
};
ECS.Components.Position.prototype.name = 'position';
