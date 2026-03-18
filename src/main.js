import 'audio-tour-player';

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const player = document.querySelector('audio-tour-player');

  if (player) {
    // Enable the offline feature
    player.enableOffline();
    console.log('Audio Player initialized and Offline Mode enabled.');
  }
});