document.addEventListener("DOMContentLoaded", () => {
    // This function is to apply the GASP animations
    function applyAnimations() {
        gsap.to(".social-icons", {
            x: 30,
            scrollTrigger: {
                trigger: ".social-icons",
                start: "top 80%", //I have added this so the animation starts only when the top is 80% in view of the viewport
                end: "bottom 20%",
                toggleActions: "play none none reverse",
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

        thankYouTimeline.fromTo(".thankyou", { scale: 0 }, { scale: 1 });
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

    // Apply animations based on viewport width
    if (window.innerWidth > 767) {
        applyAnimations();
    }

    // Reapply animations on window resize if necessary
    window.addEventListener("resize", () => {
        if (window.innerWidth > 767) {
            applyAnimations();
        } else {
            gsap.set(".social-icons", { x: 0 });
            gsap.set(".thankyou", { scale: 1 });
        }
    });
});