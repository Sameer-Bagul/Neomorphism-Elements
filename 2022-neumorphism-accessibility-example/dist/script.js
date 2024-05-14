// Toggles the style of the neumorphic button
function changeStyle(btnPressed) {
  var btn = document.getElementById(btnPressed);
  btn.classList.toggle("neumorphic");
  btn.classList.toggle("neumorphic-pressed");
  
  // Figures out which function to call from which button was pressed
  if (btnPressed === 'play-pause') {
    play();
  } else if (btnPressed === 'shuffle-btn') {
    shuffle();
  }
}

// Toggles the visibility of the play/pause icon
function play() {
  var playBtn = document.getElementById('play');
  var pauseBtn = document.getElementById('pause');
  
  if (playBtn.style.display === 'none') {
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
  } else {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
  }
}

// Toggles the style of the shuffle indicator
function shuffle() {
  var shuffleBtn = document.getElementById('shuffle-btn');
  
  if (shuffleBtn.style.color == 'white' || shuffleBtn.style.color == '') {
    shuffleBtn.style.color = '#143664';
  } else {
    shuffleBtn.style.color = 'white';
  }
}