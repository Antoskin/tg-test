import $ from 'jquery';
export default function(e) {
        let xpos=e.clientX,
            ypos=e.clientY;
        xpos=xpos*2;
        ypos=ypos*2;
        $('.img-parallax-three').css(   'top',  (( 0+(ypos/-65))+"px"));
        $('.img-parallax-three').css(   'left', (( 70+(xpos/-65))+"px"));
        $('.img-parallax-two').css(     'top',  (( 0+(ypos/-70))+"px"));
        $('.img-parallax-two').css(     'left', (( 80+(xpos/-70))+"px"));
        $('.img-parallax-one').css(     'top',  (( 0+(ypos/-90))+"px"));
        $('.img-parallax-one').css(     'left', (( 70+(xpos/-90))+"px"));
        $('.target-mac').css(           'top',  (( 0+(ypos/-120))+"px"));
        $('.target-mac').css(           'left', (( 50+(xpos/-120))+"px"));
        // console.log(xpos);       
}