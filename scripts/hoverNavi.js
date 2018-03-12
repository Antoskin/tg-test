import $ from 'jquery';
import { TweenMax } from 'gsap';

export default function() {
    const tm = TweenMax;
    $(`.menu-wrap> a`).delegate(``, `mouseover mouseout`, function(e){
        var curLin = $(this).find('.string-fi');
        if(e.type === `mouseover`) {
            tm.to(curLin, 0.3, { width:100+'%'})
        }
        else if(e.type === `mouseout`) {
            tm.to(curLin, 0.3, {right:0,width:0+'%'});
            tm.to(curLin, 0.01, {right:'auto'}).delay(0.3);
        }
    })
}