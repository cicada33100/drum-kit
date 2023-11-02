var drums = document.querySelectorAll(".drum");
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    let button = this.innerHTML;
    makeSound(button);
    buttonAnimation(button);
  });
}
//kada se stisne bilo koje dugme da se pokrene event i onda se ispituju properties tog eventea
//kao na primer to dogume ko je je stisnuto itd...
addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let audio1 = new Audio("./sounds/crash.mp3");
      audio1.play();
      break;
    case "a":
      let audio2 = new Audio("./sounds/kick-bass.mp3");
      audio2.play();
      break;
    case "s":
      let audio3 = new Audio("./sounds/tom-1.mp3");
      audio3.play();
      break;
    case "d":
      let audio4 = new Audio("./sounds/tom-3.mp3");
      audio4.play();
      break;
    case "j":
      let audio5 = new Audio("./sounds/tom-2.mp3");
      audio5.play();
      break;
    case "k":
      let audio6 = new Audio("./sounds/tom-4.mp3");
      audio6.play();
      break;
    case "l":
      let audio7 = new Audio("./sounds/snare.mp3");
      audio7.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  let buttonPressed = document.querySelector("." + currentKey);
  buttonPressed.classList.add("pressed");

  setTimeout(function () {
    buttonPressed.classList.remove("pressed");
  }, 100);
}

//let audio = new Audio("./sounds/tom-1.mp3")
//audio.play()
