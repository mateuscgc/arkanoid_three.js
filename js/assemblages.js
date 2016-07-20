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

    Circle: function Circle(params) {
        params = params || {};

        var entity = new ECS.Entity();
        entity.addComponent( new ECS.Components.Appearance(
                                    {
                                        shape: 'circle',
                                        radius: params.radius || 1.7,
                                        width: 0,
                                        height: 0,
                                        color: params.color || 0xffffff
                                    }));

        entity.addComponent( new ECS.Components.Position(
                                    {
                                        x: params.x || 50,
                                        y: params.y || 20
                                    }));

        // entity.addComponent( new ECS.Components.Collision());

        return entity;
    },

    Paper: function PaperBrick(params) {
        params = params || {};

        var entity = new ECS.Assemblages.Brick();
        entity.addComponent( new ECS.Components.Position({ x: params.x, y: params.y }));
        entity.addComponent( new ECS.Components.Health({ initial: 1 }) );
        entity.components.appearance.color = 0xffffff;

        return entity;
    },

    Brick: function DefaultBrick() {
        // Basic collision rect
        var entity = new ECS.Entity();
        entity.addComponent( new ECS.Components.Appearance({ width: ECS.Constants.BRICK_WIDTH, height: ECS.Constants.BRICK_HEIGHT}));
        // entity.addComponent( new ECS.Components.Collision());

        return entity;
    },

    CollisionRect: function CollisionRect() {
        // Basic collision rect
        var entity = new ECS.Entity();
        entity.addComponent( new ECS.Components.Appearance());
        entity.addComponent( new ECS.Components.Position());
        // entity.addComponent( new ECS.Components.Collision());

        return entity;
    }

};
