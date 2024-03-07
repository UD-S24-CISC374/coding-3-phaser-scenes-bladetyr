import Phaser from "phaser";
import startScene from "./scenes/startScene";
import PreloadScene from "./scenes/preloadScene";
import clutter1Scene from "./scenes/clutter1Scene";
import clutter2Scene from "./scenes/clutter2Scene";
import clutter3Scene from "./scenes/clutter3Scene";
import endScene from "./scenes/endScene";

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;

export const CONFIG = {
    title: "My Untitled Phaser 3 Game",
    version: "0.0.1",
    type: Phaser.AUTO,
    backgroundColor: "#ffffff",
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    scene: [
        PreloadScene,
        startScene,
        clutter1Scene,
        clutter2Scene,
        clutter3Scene,
        endScene,
    ],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: { y: 300 },
        },
    },
    input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: false,
    },
    render: {
        pixelArt: false,
        antialias: true,
    },
};
