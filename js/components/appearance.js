// Appearance
// --------------------------------------
ECS.Components.Appearance = function ComponentAppearance ( params ){
    // Appearance specifies data for color and size
    params = params || {};

    if(!params.colors)
        this.color = params.color;
    else
        this.color = 0x555555;

    this.width = params.width || 50;
    this.height = params.height || 25;

    return this;
};
ECS.Components.Appearance.prototype.name = 'appearance';
