import { Howl } from "howler";

import click from "../assets/sounds/click.mp3";
import typeSound from "../assets/sounds/type.mp3";
import correct from "../assets/sounds/correct.mp3";
import wrong from "../assets/sounds/wrong.mp3";
import bgm from "../assets/sounds/bgm.mp3";
import ending from "../assets/sounds/ending.mp3";

class SoundManager {

    click = new Howl({
        src: [click],
        volume: 0.5,
    });

    type = new Howl({
        src: [typeSound],
        volume: 0.2,
    });

    correct = new Howl({
        src: [correct],
        volume: 0.8,
    });

    wrong = new Howl({
        src: [wrong],
        volume: 0.8,
    });

    bgm = new Howl({
        src: [bgm],
        loop: true,
        volume: 0.4,
    });

    ending = new Howl({
        src: [ending],
        loop: true,
        volume: 0.4,
    });

}

export default new SoundManager();