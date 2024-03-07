import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("creature", "assets/img/little dude.png");
        this.load.image("creatureDark", "assets/img/little dude2.png");
        this.load.image("creatureDarker", "assets/img/little dude3.png");
        this.load.image("creatureDarkerYet", "assets/img/little dude4.png");
        this.load.image(
            "yesThisIsAGasterReference",
            "assets/img/little dude5.png"
        );

        this.load.image("title", "assets/img/find the creature.png");
        this.load.image("clutter1", "assets/img/clutter1.png");
        this.load.image("clutter2", "assets/img/clutter2.png");
        this.load.image("clutter3", "assets/img/clutter3.png");
        this.load.image("end", "assets/img/find it.png");
    }

    create() {
        this.scene.start("startScene");
    }
}
