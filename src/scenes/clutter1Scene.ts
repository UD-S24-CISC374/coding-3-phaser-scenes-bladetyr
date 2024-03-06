import Phaser from "phaser";
import { dataSent } from "../objects/dataSent";

export default class clutter1Scene extends Phaser.Scene {
    score = 0;
    scoreText: Phaser.GameObjects.Text;
    constructor() {
        super({ key: "clutter1Scene" });
        console.log("clutter1Scene#constructor");
    }

    init(data: dataSent) {
        console.log("clutter1Scene#init");
        this.score = data.score;
        this.scoreText = data.scoreText;
    }

    preload() {
        console.log("clutter1Scene#preload");
    }

    create() {
        console.log("clutter1Scene#create");
        this.add.image(400, 300, "clutter2");

        // score stuff
        this.scoreText = this.add.text(16, 16, `Score: ${this.score}`, {
            fontSize: "32px",
            color: "#fff",
        });
    }

    update() {
        console.log("clutter1Scene#update");
    }
}
