function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
loco()



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top top",
        end:"top -200%",
        pin:true,
        scrub:1
    }
})
tl
.from("#center",{
    x:"70%",
    ease: Power1,
})
.to("#gal",{
    y:"100%",
    ease: Power1,
},"a")
.to("#circle",{
    scale:.2,
    ease: Power1,
},"a")
.to("#circle #btm img",{
    rotate:-180,
    stagger:0.05,
    ease: Power1,
},"a")
.to("#circle-m",{
    scale:.6,
    ease: Power1,
},"a")
.from("#page1 svg",{
    scale:.1,
    y:"150%",
    ease: Power1,
},"a")
.to("#center h6",{
    opacity:0,
    ease: Power1,
},"a")
.to("#center img",{
    scale:0,
    duration:.5,
    ease: Power1,
},"a")
.to("#bg",{
    scale:1,
    duration:1.5,
    ease: Power1,
},"a")
.to("#circle-m , #circle",{
    scale:0,
    delay:-1,
    ease: Power1,
},"b")
.to("#page1 svg",{
    scale:0,
    opacity:0,
    delay:-1,
    ease: Power1,

},"b")
.from("#pink",{
    y:"130%",
    rotate:10,
    delay:-1,
    ease: Power1,
},"b")
.to("#page1 #card",{
    top:"0%",
    ease: Power1,
    delay: -.6,
})
.to("#page1 #card",{
    top:"-100%",
    ease: Power1,
    delay: .2,
})


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top top",
        end:"350% top",
        pin:true,
        scrub:1
    }
})
.from("#circle1",{
    y:"120%",
    scale:.5,
    ease:Power1
})
.from("#circle2",{
    y:"120%",
    scale:.5,
    delay:-.4,
    ease:Power1

})
.to("#circle1",{
    left:"50%",
    ease:Power1

},"c")
.to("#circle2",{
    left:"50%",
    ease:Power1

},"c")
.to("#circle1",{
    scale:.7,
    ease:Power1

},"s")
.to("#circle2",{
    scale:.7,
    ease:Power1

},"s")
.to("#circle1",{
    scale:6,
    ease:Power1

})
.to("#num h2",{
    y:"-100%",
    ease:Power1
 })
.to("#text",{
   x:"-100%",
   duration:2.5,
   ease:Power1
},"m")
.to("#tx1",{
    opacity:0,
 },"m")
 .from("#tx2",{
    opacity:0,
    delay:.5
 },"m")
.to("#num h2",{
    y:"-200%",
    ease:Power1,
    delay:-.2
 })
.to(".shades",{
    height:"100%",
    stagger:0.09
})
.to(".box",{
    transform: "translateX(60%)",
})
.to(".strip",{
    x:"-30%"
})



var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3 #overlayy",
        scroller:"#main",
        start:"top top",
        end:"400% top",
        pin:true,
        scrub:1,
        // markers:true
    }
})


document.querySelector("#hex1").addEventListener("mousemove",function(){
    document.querySelector("#main").style.backgroundColor = "#DEF3FF"
})
document.querySelector("#hex1").addEventListener("mouseleave",function(){
    document.querySelector("#main").style.backgroundColor = "#FFF"
})
document.querySelector("#hex2").addEventListener("mousemove",function(){
    document.querySelector("#main").style.backgroundColor = "#794856"
})
document.querySelector("#hex2").addEventListener("mouseleave",function(){
    document.querySelector("#main").style.backgroundColor = "#FFF"
})



gsap.to("#lens",{
    rotate:180,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 90%",
        end:"top -100%",
        scrub:true,
        // markers:true
    }
})

var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        start:"top 80%",
        end:"top -60%",
        scrub:true,
        // markers:trues
    }
})
tl5
.to("#page5 #wraper",{
    transform:"translateX(-10%)",
    ease:Power1

},"a")
.to("#hide",{
    width:"0%",
    ease:Power1,
    delay:0.1
},"a")
.from(".lf",{
    x:"-100%"
},"a")
.from(".rt",{
    x:"100%",
},"a")

document.querySelector("#hex3").addEventListener("mousemove",function(){
    document.querySelector("#main").style.backgroundColor = "#706993"
})
document.querySelector("#hex3").addEventListener("mouseleave",function(){
    document.querySelector("#main").style.backgroundColor = "#FFF"
})


var tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        start:"top 100%",
        end:"top 0%",
        scrub:1,
        // markers:true
    }
})
tl6
.to("#wraper2",{
    transform:"translateX(-30%)"
},"s")
.from("#igc",{
    transform: "translate(-50%,0%)",
    ease:Power1
},"s")
.from("#igl",{
    y:"50%",
    ease:Power1
},"s")
.from("#igr",{
    y:"100%",
    ease:Power1
},"s")



document.querySelector("#open").addEventListener("click",function(){
    gsap.to("#loader",{
        top:"0%",
        delay:.01
    })
})
document.querySelector("#close").addEventListener("click",function(){
    gsap.to("#loader",{
        top:"100%",

    })
})