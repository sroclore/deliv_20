
document.addEventListener('DOMContentLoaded', (event) => {

  const video = document.getElementById('player1');
  video.autoplay = false;
  video.loop = false;

  const oldSchoolButton = document.getElementById('oldSchool');
  const originalButton = document.getElementById('original');

  const volumeSlider = document.getElementById('slider');
  volumeSlider.addEventListener('input', () => {
  video.volume = volumeSlider.value / 100;
  });

  const muteButton = document.getElementById('mute');

  muteButton.addEventListener('click', function() {
    video.muted = !video.muted;
    muteButton.innerText = video.muted ? 'Unmute' : 'Mute';
  });

  let slowCount = 0;
  let speedCount = 0;

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsPart = Math.floor(seconds % 60);
    return `${minutes}:${secondsPart < 10 ? '0' : ''}${secondsPart}`;
  }

  function updateTime() {
    document.getElementById('currentTime').textContent = formatTime(video.currentTime);
    document.getElementById('duration').textContent = formatTime(video.duration);
  }

  video.addEventListener('loadedmetadata', updateTime);
  
  video.addEventListener('timeupdate', updateTime);

  document.getElementById('play').addEventListener('click', function() {
    video.play();
    updateVolumeInfo();
  })


  document.getElementById('pause').addEventListener('click', function() {
    video.pause();
  })


  document.getElementById('slower').addEventListener('click', function() {
    slowCount++;
    video.playbackRate -= 0.1;
    console.log(`New speed: ${video.playbackRate}`);
  })

  document.getElementById('faster').addEventListener('click', function() {
    if (slowCount > speedCount) {
      video.playbackRate += 0.1; // Speed up by 10%
      speedCount++;
      console.log(`New speed: ${video.playbackRate}`);
    } else {
      console.log("Cannot speed up beyond original speed");
    }
    })

  document.getElementById('skip-ahead').addEventListener('click', function() {
    if (video.currentTime + 10 < video.duration) {
      video.currentTime += 10;
    } else {
      video.currentTime = 0;
    }
    console.log(`Current time: ${video.currentTime}`);
  })


  video.classList.add('oldSchool');


  function updateVolumeInfo() {
    const volumeInfo = document.getElementById('volume-info');
    volumeInfo.textContent = `${Math.round(video.volume * 100)}%`;
  }

  oldSchoolButton.addEventListener('click', function() {
    video.classList.add('oldSchool');
  });

  originalButton.addEventListener('click', function() {
    video.classList.remove('oldSchool');
  });

});
