import Phaser from "phaser";

export class dataSent {
    score: number;
    scoreText: Phaser.GameObjects.Text;

    constructor(score: number, scoreText: Phaser.GameObjects.Text) {
        this.score = score;
        this.scoreText = scoreText;
    }
}
