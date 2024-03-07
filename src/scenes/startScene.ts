import Phaser from "phaser";

export default class startScene extends Phaser.Scene {
    creature?: Phaser.GameObjects.Sprite;
    score = 0;
    scoreText: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "startScene" });
        console.log("startScene#constructor");
    }

    init() {
        console.log("startScene#init");
    }

    preload() {
        console.log("startScene#preload");
    }

    create() {
        console.log("startScene#create");
        this.add.image(400, 300, "title");
        this.creature = this.add.sprite(400, 320, "creature");
        this.creature.setInteractive();

        //keeping score
        this.scoreText = this.add.text(16, 16, "Score: 0", {
            fontSize: "32px",
            color: "#fff",
        });

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
                    this.scene.start("clutter1Scene", {
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
        console.log("startScene#update");
    }
}
