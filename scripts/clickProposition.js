import $ from 'jquery';
import { TweenMax } from 'gsap';

export default () => {
    const tm = TweenMax;
    $(`.propos-item`).click( function() {
        $(`.menu-wrap a, .text-mac-sibling h1, .mobi-mac`).addClass('slideOutUp');
        $(`.text-mac-sibling p, .mac-wrap-img> div, .mac-wrap-img> article`).addClass('slideOutDown');
        let cur = $(this);
        tm.to('.logo-wrap img', 1, {
            top:250+'%',
            left:0+'%',
            right:0+'%',
            opacity:1
        }).delay(3);
        if(cur.hasClass('partner')) {
            tm.to('.partner', 0.3, {opacity:0.2,top:-3000 }).delay(0.5);
            tm.to('.advertising', 0.3, {top:-3000}).delay(0.8);
          } else {
            tm.to('.advertising', 0.3, {top:-3000}).delay(0.5);
            tm.to('.partner', 0.3, {top:-3000}).delay(0.8);
        }
    } )
}