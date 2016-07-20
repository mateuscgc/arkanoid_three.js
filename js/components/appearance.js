// Appearance
// --------------------------------------
ECS.Components.Appearance = function( params ){
    // Appearance specifies data for color and size
    params = params || {};

    this.shape = params.shape || 'rectangle';


    if(this.shape === 'circle') {
        this.radius = (typeof params.radius === 'undefined') ? 3 : params.radius;
        this.segments = (typeof params.segments === 'undefined') ? 32 : params.segments;
        geometry = new THREE.CircleBufferGeometry(this.radius, this.segments);
                            ;
    } else {
        this.width = (typeof params.width  === 'undefined') ? 5 : params.width;
        this.height = (typeof params.height === 'undefined') ? 5 : params.height;

        geometry = new THREE.PlaneBufferGeometry( this.width, this.height );
    }

    material = new THREE.MeshBasicMaterial(
                            {
                                color: params.color || 0x885225,
                                side: THREE.DoubleSide
                            });

    this.mesh = new THREE.Mesh(geometry);
    scene.add(this.mesh);

    return this;
};
ECS.Components.Appearance.prototype.name = 'appearance';
