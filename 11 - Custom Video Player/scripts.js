// get the element
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// build out function 
function togglePlay() {
  if (video.paused) {
    video.play()
    console.log('play')
  } else {
    video.pause()
    console.log('pause')
  }
}

function toggleButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon)
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip)
  video.currentTime += parseFloat(this.dataset.skip);
}

function handelUpdateRange() {
  video[this.name] = this.value;
  // console.log(this.name)
  // console.log(this.value)

}
 
// hook up the event listener
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', toggleButton)
video.addEventListener('pause', toggleButton);

skipButtons.forEach(button => {
  button.addEventListener('click', skip)
})

ranges.forEach(range => {
  range.addEventListener('change', handelUpdateRange)
})