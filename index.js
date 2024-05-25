document.addEventListener("DOMContentLoaded", () => { 
//This function will wait until the whole page is ready, then do the stuff inside the curly braces

    // This function is to apply the "GreenSockAnimationPlatform" animations
    function applyAnimations() {
        gsap.to(".social-icons", {
            x: 30,
            scrollTrigger: {
                trigger: ".social-icons",
                start: "top 80%", //I have added this so the animation starts only when the top is 80% in view of the viewport
                end: "bottom 20%", //stop the animation when the bottom of the element is 20% from the top of the screen
                toggleActions: "play none none reverse",
                /* Toggle actions control how the animation behaves, 
                onEnter: play; starts when the trigger elements enters the viewport, 
                onLeave: none; does nothing when the trigger elements leaves the viewport
                onEnterBack: none; does nothing when the element re-enters from the opposite direction
                onLeaveBack: reverse; reverses the animetion when the trigger element leaves from the opposite direction*/
            }
        });

        const thankYouTimeline = gsap.timeline({
            defaults: { duration: 0.75 },
            scrollTrigger: {
                trigger: ".thankyou",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",

            }
        });

        thankYouTimeline.fromTo(".thankyou", { scale: 0 }, { scale: 1 });// scale zero means 0% to scale one which means 100%
    }

    const cardTimeline = gsap.timeline({
        defaults: { duration: 0.75 },
        scrollTrigger: {
            trigger: ".card",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        }
    });

    cardTimeline.fromTo(".card", { scale: 0 }, { scale: 1 });


    // If the screen is bigger than 767px do some animations
    window.addEventListener("resize", () => {
        if (window.innerWidth > 767) {
            applyAnimations();
        } else {
            //otherwise, the social icons go to their original position & image is at regular size
            gsap.set(".social-icons", { x: 0 });
            gsap.set(".thankyou", { scale: 1 });
        }
    });
});