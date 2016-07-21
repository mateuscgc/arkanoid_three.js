ECS.Components.Health = function( params ){
    params = params || {};

    this.max = (typeof params.max === 'undefined')
                    ? ((typeof params.initial === 'undefined')
                            ? 1
                            : params.initial)
                    : params.max;

    this.current = params.initial || 1;

    this.alive = ( this.current > 0 );

    return this;
};

ECS.Components.Health.prototype.name = 'health';
