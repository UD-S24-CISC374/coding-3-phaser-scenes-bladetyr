import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("creature", "assets/img/little dude.png");
        this.load.image("clutter1", "/assets/img/clutter1.png");
        this.load.image("clutter2", "/assets/img/clutter2.png");
        this.load.image("clutter3", "/assets/img/clutter3.png");
    }

    create() {
        this.scene.start("startScene");
    }
}
