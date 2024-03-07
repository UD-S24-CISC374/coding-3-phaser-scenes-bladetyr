import Phaser from "phaser";
import { dataSent } from "../objects/dataSent";

export default class endScene extends Phaser.Scene {
    score = 0;
    scoreText: Phaser.GameObjects.Text;
    creature: Phaser.GameObjects.Sprite;
    dialogueText: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "endScene" });
        console.log("endScene#constructor");
    }

    init(data: dataSent) {
        // I don't really use this data ngl but I'm transferring it here to meet the swap state requirement
        // I'll use it in the dialogue I guess
        console.log("endScene#init");
        this.score = data.score;
        this.scoreText = data.scoreText;
    }

    preload() {
        console.log("endScene#preload");
    }

    create() {
        console.log("endScene#create");
        this.add.image(400, 300, "end");
        this.creature = this.add.sprite(400, 320, "yesThisIsAGasterReference");

        this.scoreText = this.add.text(16, 16, "Score: Mine", {
            fontSize: "32px",
            color: "#fff",
        });

        this.dialogueText = this.add.text(100, 500, "Thanks for the score...", {
            fontSize: "32px",
            color: "#fff",
            backgroundColor: "#xxx",
        });

        this.dialogueText = this.add.text(
            150,
            550,
            `...I will be eating all ${this.score} of it.`,
            {
                fontSize: "32px",
                color: "#fff",
                backgroundColor: "#xxx",
            }
        );
    }

    update() {
        console.log("endScene#update");
    }
}
