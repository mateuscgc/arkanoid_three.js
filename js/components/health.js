ECS.Components.Health = function ComponentHealth ( params ){
    params = params || {};

    this.max = params.max || params.intial || 1;
    this.current = params.initial || 1;

    return this;
};

ECS.Components.Health.prototype.name = 'health';
