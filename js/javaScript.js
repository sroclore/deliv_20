// var video;



// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")

// });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

const video = document.querySelector('.video');
video.autoplay = false;
video.loop = false;

const playButton = document.getElementById('play');
playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

let playbackRate = 1.0;

document.getElementById('slower').addEventListener('click', () => {
  playbackRate -= 0.1;
  video.playbackRate = playbackRate;
  console.log(`New speed: ${playbackRate}`);
});

document.getElementById('faster').addEventListener('click', () => {
  playbackRate += 0.1;
  video.playbackRate = playbackRate;
  console.log(`New speed: ${playbackRate}`);
});

document.getElementById('skip').addEventListener('click', () => {
	if (video.currentTime + 10 < video.duration) {
	  video.currentTime += 10;
	} else {
	  video.currentTime = 0;
	}
	console.log(`Current time: ${video.currentTime}`);
  });

  const muteButton = document.getElementById('mute-button');
muteButton.addEventListener('click', () => {
  video.muted = !video.muted;
  muteButton.innerText = video.muted ? 'Unmute' : 'Mute';
});

const volumeSlider = document.getElementById('volume-slider');
volumeSlider.addEventListener('input', () => {
  video.volume = volumeSlider.value / 100;
});