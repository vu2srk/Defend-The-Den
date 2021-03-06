define([
    'underscore',
    'crafty',
    'config'
], function(_, Crafty, config) {
    
    Crafty.c("Attack", {
        init : function() {
            this.addComponent("Bullet, axe, Collision");
            
            this.speed = 15;

            this.attack = function(player) {
                
                var from = {
                    x: player.x,
                    y: player.y
                }
                
                var to = {
                    x: config.mouse.relative.x,
                    y: config.mouse.relative.y
                }
                
                this.origin("center");
                
                this.bind("EnterFrame", function() {
                    this.rotation += 15;
                });
                
                this.fire(from, to, this.speed);
                
            }
            
        }
    });

});