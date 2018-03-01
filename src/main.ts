import "pixi";
import "p2";
import * as Phaser from "phaser-ce";

class TestGame {
    debug:boolean = true;
    constructor() {
        let renderer = Phaser.AUTO;
        // Debugs can only be drawn on Canvas and not on WebGL.
        if (this.debug) {
            console.log("Debug Render");
            renderer = Phaser.CANVAS;
        }
        this.game = new Phaser.Game(1280, 720, renderer, "Phaser Test", { create: this.create });
    }
    game: Phaser.Game;

    create() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        let text = "Phaser test\nHello world!";
        let style = {
            font: "75pt Arial",
            fill: "#ff0044",
            align: "center"
        };
        let textObject = this.game.add.text(0, 0, text, style);
        textObject.x = this.game.world.centerX - textObject.width / 2;
        textObject.y = this.game.world.centerY - textObject.height / 2;
    }
}
window.onload = () => {
    let game = new TestGame();
};
