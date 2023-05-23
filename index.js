const nameD = document.getElementById("name");
const write = new Typewriter(nameD, {
  loop: false,
  delay: 20,
});

write.typeString("I'm Davidmide.").start();

// another typewriter effect
let para = document.getElementById("para");

var typewriter = new Typewriter(para, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(300)
  .typeString(
    "  <p style='color:rgb(212, 230, 20)'>Welcome to my portfolio site ❤👌</p>"
  )
  .deleteAll()
  .pauseFor(300)
  .typeString(
    "<p>A <span style='color:rgb(212, 230, 20)' >Critical Thinker</span> and <span style='color:rgb(212, 230, 20)' >Problem Solver</sapn>,</p>"
  )
  .pauseFor(300)
  .typeString("<p>who uses technology to build and create values that</p>")
  .pauseFor(300)
  .typeString(
    " <p> make life easier with the zeal to <span style='color:rgb(212, 230, 20)'> learn, relearn and unlearn</span> as</p>"
  )
  .pauseFor(300)
  .typeString("<p>technology keeps evolving.</p>")
  .pauseFor(300)
  .deleteAll(10)
  .start();

// for smooth scrolling between pages
// document.querySelectorAll("ul li").forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     gsap.to(window, {
//       duration: 1,
//       scrollTo: { y: "#section" + (index + 1), offsetY: 70 },
//     });
//   });
// });

// animation for about page
gsap.registerPlugin(ScrollTrigger);
gsap.from(".leftani", {
  scrollTrigger: {
    trigger: ".leftani",
    toggleActions: "play none play reverse",
  },
  stagger: 1,
  x: "-100px",
  opacity: 0,
  duration: 2,
});

gsap.from(".img", {
  scrollTrigger: {
    trigger: ".img",
    toggleActions: "play none reverse reverse",
  },
  x: "-500px",
  opacity: 0,
  transition: 1,
  duration: 0.31,
  stagger: 1,
});

gsap.to(".home", {
  scrollTrigger: {
    trigger: ".home",
    toggleActions: "play none restart restart",
  },
  transition: 1,
  duration: 0.31,
});

const active = document.querySelectorAll("ul a");

console.log(active);

active.forEach((link) =>
  link.addEventListener("click", () => {
    active.forEach((a) => a.classList.remove("active"));
    activeLink(link);
  })
);

function activeLink(link) {
  link.classList.add("active");
}

let isOpenNav = false;
function openMenu(x) {
  const list = document.querySelector(".list");
  if (!isOpenNav) {
    isOpenNav = true;
    x.classList.add("change");
    list.classList.add("openlist");
  } else {
    x.classList.remove("change");
    isOpenNav = false;
    list.classList.remove("openlist");
  }

}

const section = document.querySelectorAll(".section");
window.onscroll = () => {
  // console.log(active);
  section.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop-200;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    // console.log(id);
    if (top >= offset && top < offset + height) {
      active.forEach((link) => {
        // console.log(link);
        link.classList.remove("active");
        document.querySelector("ul a[href*="+ id +"]").classList.add("active");
      });
    }
  });
};
//
// "ul a[href*='+id+']"
