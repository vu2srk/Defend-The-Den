var DefendTheDen = {
    KeyBoardType: "QWERTY",
    viewPort: {
        w: 710,
        h: 580
    }
};

var debugMode = true;

window.onload = (function() {

    Crafty.init(DefendTheDen.viewPort.w, DefendTheDen.viewPort.h);

    var renderGameTitle = function() {
        Crafty.load(["img/background.png", "img/clouds.png", "img/floor.png", "img/menu-sprites.png"], function() {

            Crafty.e("2D, DOM").attr({
                w: DefendTheDen.viewPort.w,
                h: DefendTheDen.viewPort.h,
                x: 0,
                y: 0
            }).css("background", "url(img/background.png)").css("z-index", "0");

            Crafty.e("Clouds");

            Crafty.e("2D, DOM").attr({
                w: DefendTheDen.viewPort.w,
                h: 309,
                x: 0,
                y: DefendTheDen.viewPort.h - 309
            }).css("background", "url(img/floor.png)").css("z-index", "0");

            Crafty.e("NewGameMenuItem");
        });
    };

    Crafty.scene("titleScreen", function() {
        renderGameTitle();
    });

    Crafty.scene("newGame", function() {
        console.log("newGame");
        Crafty.load(["img/background-game.png","img/pig-sprite.png", "img/pig-sprite.png", "img/axe-sprite.png"], function() {
			
			Crafty.e("2D, Canvas, Image").attr({
                w: DefendTheDen.viewPort.w,
                h: DefendTheDen.viewPort.h,
                x: 0,
                y: 0
            }).image("img/background-game.png", "repeat");

            var denWall = {
                left: Crafty.e("DenWallLeft"),
                right: Crafty.e("DenWallRight"),
                top: Crafty.e("DenWallTop"),
                bottom: Crafty.e("DenWallBottom")
            };
            
            DefendTheDen.wolf = Crafty.e("Wolf");
            DefendTheDen.wolf.attachSprite(Crafty.e("WolfSprite"));
            
            DefendTheDen.selectedSkill = "ThrowingAxeSkill";
            
            DefendTheDen.throwingAxeSkill = Crafty.e("ThrowingAxeSkill");
            DefendTheDen.throwingAxeSkill.bindWolf(DefendTheDen.wolf);
            
            Crafty.e("PlaceTrapSkill").attr({
                x: 50,
                y: 10
            });
            
            setInterval(function() {
                Crafty.e("Pig").setToLine(Crafty.randRange(1, 5));
            }, 1250);
            
            makeMatrix();

        });
    });

    Crafty.scene("titleScreen");

});
