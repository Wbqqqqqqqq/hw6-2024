window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

window.addEventListener('load', function() {
    var video = document.getElementById("player1");
    var playButton = document.getElementById("play");
    var pauseButton = document.getElementById("pause");
    var volumeSpan = document.getElementById("volume");
    var volumeSlider = document.getElementById("slider");
    var slowDownButton = document.getElementById("slower");
    var speedUpButton = document.getElementById("faster");
    var skipButton = document.getElementById("skip");
    var muteButton = document.getElementById("mute");
    var oldSchoolButton = document.getElementById("vintage");
    var originalButton = document.getElementById("orig");
	// Initialize the video element and turn off autoplay and turn off looping.
    video.autoplay = false;
    video.loop = false;
	// Play the video and update the volume information. Change the volume based on the slider and update the volume information.
    function updateVolume() {
        var volumePercent = Math.round(video.volume * 100);
        volumeSpan.textContent = volumePercent + "%";
    }
    volumeSlider.addEventListener('input', function() {
        video.volume = volumeSlider.value / 100;
        updateVolume();
    });
    playButton.addEventListener('click', function() {
        video.play();
        updateVolume();
    });
	// Pause the video.
    pauseButton.addEventListener('click', function() {
        video.pause();
    });
	// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
    slowDownButton.addEventListener("click", function () {
        video.playbackRate *= 0.9;
        console.log("New playback speed: " + video.playbackRate.toFixed(5));
    });
	// Increase the current video speed each time the button is clicked and log the new speed to the console.
    speedUpButton.addEventListener("click", function () {
        video.playbackRate /= 0.9;
        console.log("New playback speed: " + video.playbackRate.toFixed(5));
    });
	// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.
    skipButton.addEventListener("click", function () {
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current video time: " + video.currentTime.toFixed(2));
    });
	// Mute/unmute the video and update the text in the button.
	muteButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = "Mute";
        } else {
            video.muted = true;
            muteButton.textContent = "Unmute";
        }
    });
	// Utilize the existing oldSchool class on the video element.
	oldSchoolButton.addEventListener('click', function() {
        if (!video.classList.contains('oldSchool')) {
            video.classList.add('oldSchool');
        }
    });
	// Remove the oldSchool class from the video.
	originalButton.addEventListener('click', function() {
        video.classList.remove('oldSchool');
    });
});
