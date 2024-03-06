import Phaser from "phaser";

export default class startScene extends Phaser.Scene {
    creature?: Phaser.GameObjects.Sprite;
    score = 0;
    private scoreText: Phaser.GameObjects.Text;

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
        this.add.image(400, 300, "clutter1");
        this.add.image(500, 400, "creature");
        this.creature?.setInteractive();

        //keeping score
        this.scoreText = this.add.text(16, 16, "Score: 0", {
            fontSize: "32px",
            color: "#fff",
        });

        //input
        this.input.on(
            "pointerdown",
            (
                pointer: Phaser.Input.Pointer,
                objectsClicked: Phaser.GameObjects.Sprite[]
            ) => {
                if (objectsClicked[0] == this.creature) {
                    alert("woagh");
                } else {
                    alert("sad");
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
