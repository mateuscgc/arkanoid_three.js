// Appearance
// --------------------------------------
ECS.Components.Appearance = function ComponentAppearance ( params ){
    // Appearance specifies data for color and size
    params = params || {};

    this.shape = params.shape || 'rectangle';
    this.radius = params.radius || 0;

    this.width = params.width || 5/(4/5);
    this.height = params.height || 5;

    this.color = params.color || 0x885225;

    return this;
};
ECS.Components.Appearance.prototype.name = 'appearance';
