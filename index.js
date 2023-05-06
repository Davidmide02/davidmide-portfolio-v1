const header = document.querySelector(".header");

function animeFn() {
    header.classList.add("animateH");
    // alert('scroll is scrollable')
    // console.log('hellow');
}

header.addEventListener("click", animeFn);


const nameD = document.getElementById("name");
const write = new Typewriter(nameD, {
  loop: false,
  delay: 50,
});

write
  .typeString("I'm Davimide.")
  .pauseFor(300)
  .typeString("  <p>Welcome to my portfolio site ❤👌</p>")
  .pauseFor(300)
  .deleteChars(32 )
  .typeString(
    "<p>A <span style='color:rgb(212, 230, 20)' >critical Thinker</span> and <span style='color:rgb(212, 230, 20)' >problem Solver</sapn>,</p>"
  )
  .pauseFor(300)
  .typeString('who uses technology to build')
  .pauseFor(300)
  .typeString(' <span >and create values that makes life easier with the zeal to learn as</span>')
  .pauseFor(300)
  .typeString(' technology keeps evolving.')
  .start();


//   another typewriter effect
// let para = document.getElementById("para");

// var typewriter = new Typewriter(para, {
//   loop: true,
//   delay: 75,❤
// });

// typewriter
//   .pauseFor(5500)
//   .typeString(
//     "<p>A <span style='color:rgb(212, 230, 20)' >critical Thinker</span> and <span style='color:rgb(212, 230, 20)' >problem Solver</sapn>,</p>"
//   )
//   .pauseFor(300)
//   .typeString(" who uses technology to build")
//   .typeString(
//     " <span >and create values that makes life easier with the zeal to learn as</span>"
//   )
//   .typeString(" technology keeps evolving.")
//   .pauseFor(1000)
//   .start();



