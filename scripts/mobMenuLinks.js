import $ from 'jquery';
import { TweenMax } from 'gsap';

export default () => {
    const tm =  TweenMax;
    $(`#nav-icon1`).click( function() {
        { 
            !$(this).hasClass('open') ? 
                tm.fromTo('.mpb_wrap',0.5,{
                    left:-200+'%',
                    opacity:0,
                    zIndex:9999
                },{ left:0, opacity:1 }) && 
                tm.staggerFrom('.mpb_wrap a',1,{ x:-20,opacity:0 },0.3) &&
                tm.staggerFrom('.separate',1,{ x:20,opacity:0 },0.3) :
                tm.to('.mpb_wrap',0.5,{
                    opacity:0,
                    zIndex:-1
                })
        }
    } )
} 