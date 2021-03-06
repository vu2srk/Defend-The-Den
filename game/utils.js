define([
    'jquery',
    'underscore',
    'config',
    'libs/box2d/box2d'
], function($, _, config, Box2D) {

    return {
        entityParser: function(code) {
            var entitiesCode = {
                "p": "Pig",
                "r": "RiddingHood",
                "g": "Granny",
                "!": "Nobody"
            };
            return entitiesCode[code];
        },
        roll: function(percent) {
            return _.random(0,100) > 100 - percent;
        },
        outOfBounds: function(entity) {
            return !(entity.x < config.viewport.width && entity.x > 0 && entity.y < config.viewport.height && entity.y > 0);
        },
        handleClick: function() {
            
        },
        box2D: {
            Vec2: Box2D.Common.Math.b2Vec2,
            BodyDef: Box2D.Dynamics.b2BodyDef,
            Body: Box2D.Dynamics.b2Body,
         	FixtureDef: Box2D.Dynamics.b2FixtureDef,
         	Fixture: Box2D.Dynamics.b2Fixture,
         	World: Box2D.Dynamics.b2World,
         	MassData: Box2D.Collision.Shapes.b2MassData,
         	PolygonShape: Box2D.Collision.Shapes.b2PolygonShape,
         	CircleShape: Box2D.Collision.Shapes.b2CircleShape,
         	DebugDraw: Box2D.Dynamics.b2DebugDraw,
			MouseJointDef: Box2D.Dynamics.Joints.b2MouseJointDef,
			PrismaticJointDef: Box2D.Dynamics.Joints.b2PrismaticJointDef,
			ContactListener: Box2D.Dynamics.b2ContactListener,
			FilterData: Box2D.Dynamics.b2FilterData
        },
        initializeViewport: function() {
            var $viewport = $("#cr-stage, #wrapper, #inner_background");
            var $outer = $("#outer_background");
            
            function replaceViewport() {
                if(config.viewport.height > $("body").height()) {
                    $viewport.removeClass("viewport_fixed").addClass("viewport_absolute");
                    $outer.removeClass("outer_fixed").addClass("outer_absolute");
                } else {
                    $viewport.removeClass("viewport_absolute").addClass("viewport_fixed");
                    $outer.removeClass("outer_absolute").addClass("outer_fixed");
                }
                config.offset = $("#cr-stage").offset()
            };
            
            $(replaceViewport());
            $(window).resize(function() { replaceViewport(); });
        },
        initializeMouseHandler: function() {
            
            $(document).mousemove(function(e) {
                config.mouse.absolute = {
                    x: e.clientX,
                    y: e.clientY
                };
                config.mouse.relative = {
                    x: e.clientX-config.offset.left,
                    y: e.clientY-config.offset.top
                };
            });
            
            $("#wrapper").click(function() {
                // trigger clic
            });
            
        }
    };

});