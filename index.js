const nameD = document.getElementById("name");
const write = new Typewriter(nameD, {
  loop: false,
  delay: 20,
});

write.typeString("I'm Davidmide.").start();

//   another typewriter effect
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
  .typeString("who uses technology to build")
  .pauseFor(300)
  .typeString(
    " <span >and create values that make life easier with the zeal to <span style='color:rgb(212, 230, 20)'> learn, relearn and unlearn as</span>"
  )
  .pauseFor(300)
  .typeString(" technology keeps evolving.")
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
  // backgroundColor:'green',
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
  y: "-10px",
  // opacity: 0,
  transition: 1,
  // backgroundColor: "yellow",
  duration: 0.31,
  // stagger: 1,
});
