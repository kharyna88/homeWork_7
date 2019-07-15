
const keys = document.querySelectorAll('.keys');


function playNote(e) {

  const audio = document.querySelector(`audio[id="${e.keyCode}"]`),
    key = document.querySelector(`.keys[id="${e.keyCode}"]`);

  if (!key) return;

  audio.currentTime = 0;
  audio.play();

  key.style.transform = "scale(1.1)";
  setTimeout(function () {
    key.style.transform = "scale(1)";
  }, 100);
}

keys.forEach(function (div) {
  let audio = div.getAttribute('id');
  div.addEventListener('click', function () {
    let sound = document.getElementById(audio);
    sound.currentTime = 0;
    sound.play();
    div.style.transform = "scale(1.1)";
    setTimeout(function () {
      div.style.transform = "scale(1)";
    }, 100);
  });
})

document.addEventListener('keydown', playNote);

