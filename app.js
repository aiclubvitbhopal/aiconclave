gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
console.log("running");

const header = document.querySelector('.hero-main-heading');
const subheader = document.querySelector('.hero-main-sub');
const tags = document.querySelector('.hero-main-tags');
const bottomBar = document.querySelector('.bottom-bar');
leftNav = document.querySelector("nav");
console.log(header);


let t1 = gsap.timeline({ paused: true, reversed: true });

t1.play();

gsap.defaults({
    duration: 1,
});

t1.from(
    header,
    {
        ease: "elastic.out(1, 0.5)",
        x: -1000,
    }
);

t1.addLabel("bottomBar")
t1.from(
    bottomBar,
    {
        x: 1400,
        ease: "back.out(1)",
        duration: 0.5
    }
).from(
    ".bottom-bar img",
    {
        opacity: 0,
        stagger: 0.1,
        duration: 0.5
    },
    "<0.2"
);
t1.from(
    subheader,
    {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 0.8
    }
).from(
    tags,
    {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 0.8
    },
    "<0.1"
);
t1.from(
    leftNav,
    {
        height: "38px",
        y: -200,
        // opacity: 0,
    },
    "<"
);
t1.from(
    "nav .item",
    {
        stagger: 0.2,
        duration: 1,
        y: -1000
    },
    "<"
);

show_hide_nav();

function show_hide_nav(){
    const show_hide_nav = gsap.from(bottomBar, {
        xPercent: 100,
        duration: 0.5,
        ease: "sine.out",

    });
    ScrollTrigger.create({
        onUpdate: (self)=>{
            if(self.direction === -1) show_hide_nav.play();
            else show_hide_nav.reverse();
        }
    })
};

gsap.from("#container-event", {
    duration: 1, 
    y: 300,
    opacity: 0,
    ease: "power4.inOut",
    pin: true,
    scrollTrigger:{
        trigger: "#container-event",
        markers: false,
        start: "top bottom",
        toggleActions: "play none none reverse",
        // scrub: true,
        // toggleClass: {targets: ".l1", className: "active"}
        // onToggle: self => {
        //     $(".l1").css("background-color", "red");
        // }
    }
});

gsap.from([".event-left .timeline",".event-left .event-head",".event-left .event-text"], {
    duration: 1, 
    stagger: 0.2,
    // delay: 0.3,
    y: 300,
    opacity: 0,
    ease: "power4.out",
    pin: true,
    scrollTrigger:{
        trigger: "#container-event",
        markers: false,
        start: "top 85%",
        toggleActions: "play none none reverse",

        // scrub: true, 
        // toggleClass: {targets: ".l1", className: "active"}
        // onToggle: self => {
        //     $(".l1").css("background-color", "red");
        // }
    }
});

gsap.from(".event-right #card1", {
    duration: 1.2,
    x: -200,
    opacity: 0,
    ease: "power4.out",
    pin: true,
    scrollTrigger:{
        trigger: "#container-event",
        markers: false,
        start: "top 70%",
        toggleActions: "play none none reverse",
    }
});
gsap.from(".event-right #card2", {
    duration: 1.2,
    x: 200,
    opacity: 0,
    ease: "power4.out",
    pin: true,
    scrollTrigger:{
        trigger: "#container-event",
        markers: false,
        start: "top 50%",
        toggleActions: "play none none reverse",
    }
});
gsap.from(".event-right #card3", {
    duration: 1.2,
    x: -200,
    opacity: 0,
    ease: "power4.out",
    pin: true,
    scrollTrigger:{
        trigger: "#container-event",
        markers: false,
        start: "top 30%",
        toggleActions: "play none none reverse",
    }
});
gsap.from(".event-right #card4", {
    duration: 1.2,
    x: 200,
    opacity: 0,
    ease: "power4.out",
    pin: true,
    scrollTrigger:{
        trigger: "#container-event",
        markers: false,
        start: "top 5%",
        toggleActions: "play none none reverse",
    }
});

gsap.from("#rocket-img",{
    // opacity: 0,
    y: 500,
    ease: "elastic.out(1, 0.3)",
    duration: 2,
    scrollTrigger:{
        trigger: "#card4",
        markers: false,
        start: "bottom bottom",
        toggleActions: "play none none reverse",
    }
});

MotionPathHelper.create("#rocket-img");


console.log("running2");
