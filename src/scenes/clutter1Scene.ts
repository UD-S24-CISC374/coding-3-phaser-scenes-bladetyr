import Phaser from "phaser";
import { dataSent } from "../objects/dataSent";

export default class clutter1Scene extends Phaser.Scene {
    score = 0;
    scoreText: Phaser.GameObjects.Text;
    creature: Phaser.GameObjects.Sprite;
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
        this.add.image(400, 300, "clutter1");
        this.creature = this.add.sprite(220, 550, "creatureDark");
        // creature has to be interactive to click on
        this.creature.setInteractive();

        // score stuff
        this.scoreText = this.add.text(16, 16, `Score: ${this.score}`, {
            fontSize: "32px",
            color: "#fff",
        });

        // Note: I didn't wanna have to paste this but extending the class by the startScene was causing errors
        // and I didn't have a lot of time so I gave up
        // sorry for spaghetti code :[

        //input
        this.input.on(
            "pointerdown",
            (
                pointer: Phaser.Input.Pointer, // we don't use the pointer param but if we don't include it it returns a pointer manager instead ugh
                objectsClicked: Phaser.GameObjects.Sprite[]
            ) => {
                console.log(objectsClicked);
                if (objectsClicked.length > 0) {
                    this.clickGuy();
                    // CHANGE SCENE HERE
                    // stop updating scene
                    this.scene.stop();
                    //send data to new scene
                    console.log(this.score);
                    console.log(this.scoreText);

                    // swap to new scene
                    this.scene.start("clutter2Scene", {
                        score: this.score,
                        scoreText: this.scoreText,
                    });
                }
            }
        );
    }

    //change score
    public clickGuy() {
        this.score += 1;
        this.scoreText.setText(`Score: ${this.score}`);
    }

    update() {
        console.log("clutter1Scene#update");
    }
}
