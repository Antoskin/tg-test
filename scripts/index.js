import parallax from './parallax';
import autoAnimation from './gsapAuto';
import HoverLinks from './hoverNavi';
import clickPropsAnimate from './clickProposition';
import mobLinksAnimate from './mobMenuLinks';
import $ from 'jquery';
import { TweenMax } from 'gsap';

$(document).ready(()=> {
    const tm = TweenMax;
    autoAnimation();
    HoverLinks();
    clickPropsAnimate();
    mobLinksAnimate();
     
    $('#nav-icon1').click(function(){
        /*burger*/
		$(this).toggleClass('open');
	});
})

$(window).mousemove((e) => { parallax(e) })

