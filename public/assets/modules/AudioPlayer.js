// import 'nomodule';
// import defaultModule from './module.js'
// import { namedModule1, namedModule2 as m2 } from './module.js'

// ES Module 확장자가 반드시 필요
import create from "./create.js";  // 기본 내보내기
import { on } from './event.js';  // 이름 내보내기

{
    // function AudioPlayer(source) {
    //     this._audio = create('audio', { src: source });
    // }

    // AudioPlayer.prototype.play = function (loop = false) {
    //     const { _audio: audio } = this;

    //     audio.play();

    //     if (loop) {
    //     on(audio, 'ended', audio.play.bind(audio));
    //     }
    // };

    // AudioPlayer.prototype.isPlaying = function () {
    //     return !this._audio.paused;
    // };

    // AudioPlayer.prototype.stop = function () {
    //     this._audio.pause();
    //     this._audio.currentTime = 0;
    // };
}


class AudioPlayer {
    #audio = null;  // private
    static version = '0.0.1';

    constructor(source) {
        this.#audio = create('audio', { src: source });
    }

    play(loop = false) {
        // const { #audio: audio } = this;

        this.#audio.play();

        if (loop) {
            on(this.#audio, 'ended', this.#audio.play.bind(this.#audio));
            // on(audio, 'ended', () => {
            //     audio.play();
            // });
        }
    };

    isPlaying() {
        return !this.#audio.paused;
    };

    stop() {
        this.#audio.pause();
        this.#audio.currentTime = 0;
    };
}

export default AudioPlayer;