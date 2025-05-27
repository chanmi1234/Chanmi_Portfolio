gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let sections = gsap.utils.toArray(".project");

function goToSection(i) {
    gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
        duration: 0.85
    });
}

ScrollTrigger.defaults({
    /*   markers: true */
});

sections.forEach((eachPanel, i) => {
    // const mainAnim = gsap.timeline({ paused: true });
    /*     if (i == 0) { 
            ScrollTrigger.create({
                trigger: eachPanel,
                pin: true,
                pinSpacing: false,
                toggleClass: {targets: eachPanel,className: 'on'}
            });
        } */

    ScrollTrigger.create({
        trigger: eachPanel,
        onEnter: () => goToSection(i)
    });

    ScrollTrigger.create({
        trigger: eachPanel,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i)
    });



});

$(document).ready(function () {
    /*     $('.jeep_bg ').youtube_background() */
    $('.police_bg ').youtube_background()
    $('.all_menu img').click(function(){
        $(this).hide().siblings().show();
        $('body').toggleClass('on');
    });
});

