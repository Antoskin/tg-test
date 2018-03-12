import $ from 'jquery';
import {TweenMax} from 'gsap';

export default () => {
    const tm = TweenMax;
    tm.from(`.string-fi-big`, 0.4, {
        width:0
    }).delay(1);
}