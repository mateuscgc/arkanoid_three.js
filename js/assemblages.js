/* =========================================================================
 *
 * Assemblages.js
 *  Contains assemblages. Assemblages are essentially entity "templates"
 *
 * ========================================================================= */

ECS.Assemblages = {
    // Each assemblage creates an entity then returns it. The entity can
    // then have components added or removed - this is just like a helper
    // factory to create objects which can still be modified

    Circle: function(params) {
        params = params || {};

        var entity = new ECS.Entity();
        entity.addComponent( new ECS.Components.Appearance(
                                    {
                                        shape: 'circle',
                                        radius: (typeof params.radius === 'undefined') ? 1.7 : params.radius,
                                        color: params.color || 0xffffff
                                    }));

        entity.addComponent( new ECS.Components.Position(
                                    {
                                        x: (typeof params.x === 'undefined') ? 10 : params.x,
                                        y: (typeof params.y === 'undefined') ? 20 : params.y
                                    }));

        // entity.addComponent( new ECS.Components.Collision());

        return entity;
    },

    Paper: function(params) {
        params = params || {};

        var entity = new ECS.Assemblages.Brick();
        entity.addComponent( new ECS.Components.Position({ x: params.x, y: params.y }));
        entity.addComponent( new ECS.Components.Health({ initial: 1 }) );
        // entity.components.appearance.Mesh.material.color = 0x45f424;

        return entity;
    },

    Brick: function() {
        // Basic collision rect
        var entity = new ECS.Entity();
        entity.addComponent( new ECS.Components.Appearance(
                                    {
                                        shape: 'rectangle',
                                        width: ECS.Constants.BRICK_WIDTH,
                                        height: ECS.Constants.BRICK_HEIGHT
                                    }));
        // entity.addComponent( new ECS.Components.Collision());

        return entity;
    },

    Paddle: function(params) {
        params = params || {};

        var entity = new ECS.Entity();
        entity.addComponent( new ECS.Components.Appearance(
                                    {
                                        shape: 'rectangle',
                                        width: ECS.Constants.BRICK_WIDTH * 2,
                                        height: ECS.Constants.BRICK_HEIGHT * 1.2,
                                        color: params.color || 0xffffff
                                    }));
        entity.addComponent( new ECS.Components.Health({ initial: (typeof params.initial === 'undefined') ? 3 : params.initial }) );
        entity.addComponent( new ECS.Components.Position(
                                    {
                                        x: (typeof params.x === 'undefined') ? 50 : params.x,
                                        y: (typeof params.y === 'undefined') ? 8 : params.y
                                    }));
        // entity.addComponent( new ECS.Components.Collision());
        return entity;
    },

    CollisionRect: function() {
        // Basic collision rect
        var entity = new ECS.Entity();
        entity.addComponent( new ECS.Components.Appearance());
        entity.addComponent( new ECS.Components.Position());
        // entity.addComponent( new ECS.Components.Collision());

        return entity;
    }

};
