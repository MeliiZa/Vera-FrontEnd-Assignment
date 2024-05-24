document.addEventListener("DOMContentLoaded", () => {
    // Function to apply GSAP animations
    function applyAnimations() {
        gsap.to(".social-icons", { x: 30 });
        gsap.to(".thankyou", { x: -130 });
    }

    // Check if the viewport width is greater than 767px
    if (window.innerWidth > 767) {
        applyAnimations();
    }

    // Event listener for window resize to reapply animations if necessary
    window.addEventListener("resize", () => {
        if (window.innerWidth > 767) {
            applyAnimations();
        } else {
            gsap.set(".social-icons", { x: 0 });
            gsap.set(".thankyou", { x: 0 });
        }
    });
});



