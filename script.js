let x = document.querySelectorAll(".audio");
let y = [];

const key = x.forEach(function(element) {
  y.push(`document.getElementById("${element.id}")`);
});

console.log(y);


function playAudio() {
console.log(y[3].play()) ;
}




//const key = document.querySelector('.keys');

function init() {
  document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 65:
          playAudio("A");
        break;
      case 83:
        break;
      case 68:
        break;
      case 70:
        break;
      case 71:
        break;
      case 72:
        break;
      case 74:
        break;
      case 75:
        break;
    };
  })
};

init();