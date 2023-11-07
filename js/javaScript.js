
document.addEventListener('DOMContentLoaded', (event) => {

  const video = document.getElementById('player1');
  video.autoplay = false;
  video.loop = false;


  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsPart = Math.floor(seconds % 60);
    return `${minutes}:${secondsPart < 10 ? '0' : ''}${secondsPart}`;
  }

  function updateTime() {
    document.getElementById('currentTime').textContent = formatTime(video.currentTime);
    document.getElementById('duration').textContent = formatTime(video.duration);
  }

  video.addEventListener('loadmetadata', updateTime);

  video.addEventListener('timeupdate', updateTime);

  document.getElementById('play').addEventListener('click', function() {
    video.play();
    updateVolumeInfo();
  })


  document.getElementById('pause').addEventListener('click', function() {
    video.pause();
  })

})
