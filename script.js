

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

function cursorEffect(){
    let page1Content =  document.querySelector("#page1-content");
let cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function(dets) {
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y
    })
})
page1Content.addEventListener("mouseenter", function() {
    gsap.to(cursor,{
        scale:1,
        opacity: 1
    })
})

page1Content.addEventListener("mouseleave", function() {
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()

function page2Animation() {
    gsap.from(".elem h1",{
        y:120,
        stragger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:'#page2',
            scroller:"#main",
            start:"top 40%",
            end:"top 37%",
            scrub:2
        }
    })  
}
page2Animation()
function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}
page6Animations()

    function silderAnimation(){
        let swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
        });
    }
    silderAnimation()

    // function loder(){
    //     let t1= gsap.timeline()
    //      t1.from('#loader h3',{
    //         x:40,
    //         opacity:1,
    //         duration:1,
    //         stagger:0.1
    //      })
    //      t1.to('#loader h3',{
    //         x:-20,
    //         opacity:0,
    //         duration:1,
    //         stagger:0.1
    //      })
    //      t1.to('#loader',{
    //         opacity:0,
    //      })
    //      t1.from("#page1-content h1 span",{
    //         y:100,
    //         opacity:0,
    //         duration:0.5,
    //         stagger:0.1,
    //         delay:-0.5
    //      })
    //      t1.to('#loader',{
    //         display:none,
    //      })
    // }
    // loder()

