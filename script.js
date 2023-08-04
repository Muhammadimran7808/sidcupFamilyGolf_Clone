
function openNav() {
    document.getElementsByClassName("nav-item")[0].style.right = "0vw";
}

function closeNav() {
    document.getElementsByClassName("nav-item")[0].style.right = "-75vw";
}


// MEDIA QUARY
function myFunction(x) {
    if (x.matches) {
        document.addEventListener("DOMContentLoaded", function () {
            const sidebar = document.getElementsByClassName("nav-item")[0];
            const content = document.querySelector("main");
            function closeSidebar() {
                closeNav()
            }
            // Event listener for the content area
            content.addEventListener("click", function (event) {
                const target = event.target;
                console.log(target)
                // Check if the clicked element is not part of the sidebar
                if (target !== sidebar && !sidebar.contains(target)) {
                    closeSidebar(); // Close the sidebar
                }
            });
        });
    }
  }
  
  let x = window.matchMedia("(max-width: 600px)")
  myFunction(x) // Call listener function at run time


let circleBlur = document.querySelector("#cursor-bg-blur")
let circle = document.querySelector("#cursor-friend")

window.addEventListener("mousemove", function (details) {

    setTimeout(function () {
        circle.style.left = details.x + "px"
        circle.style.top = details.y + "px"
        circleBlur.style.left = details.x + "px"
        circleBlur.style.top = details.y + "px"
    }, 100)
})

let acnherAll = document.querySelectorAll(".nav-item a, #options a, .card, .box, button")
acnherAll.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
        circle.style.height = "75px"
        circle.style.width = "75px"
        circle.style.border = "0.6px solid #fff"
        circle.style.backgroundColor = "transparent"
        circle.style.transition = "all 0.145s linear"     
    })

    element.addEventListener("mouseleave", function () {
        circle.style.height = "20px"
        circle.style.width = "20px"
        circle.style.border = "0px solid #95C11E"
        circle.style.backgroundColor = "#95C11E"
        circle.style.transition = "all 0s linear" 
    })
})


// GSAP for Nav-Bar
gsap.to(".nav-bar", {
    backgroundColor: "#000",
    height: 85,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav-bar",
        scroller: "body",
        // markers:true,
        start: "top -4%",
        end: "top -6%",
        scrub: 1
    }
})

// GSAP for Body BackGround Color

gsap.to("main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -70%",
        scrub: 2
    }
})


// GSAP FOR ABOUT SECTION 
gsap.from("#about-section img, #about-content", {
    y: 70,
    opacity: 0,
    duration: 1,
    stagger: 0.9,
    scrollTrigger: {
        trigger: "#about-section",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 95%",
        scrub: 2
    }
})

// Gsap for quotation marks
gsap.from("#left-quote", {
    y: -50,
    x: -50,
    scrollTrigger: {
        trigger: "#left-quote",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 40%",
        scrub: 2
    }
})
gsap.from("#right-quote", {
    y: 50,
    x: 50,
    scrollTrigger: {
        trigger: "#right-quote",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 2
    }
})
gsap.from("#three-box-back-text", {
    y: 50,
    scrollTrigger: {
        trigger: "#three-box-back-text",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 60%",
        scrub: 2
    }
})


