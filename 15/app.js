let play = document.getElementById("playButton");
let pause = document.getElementById("pauseButton");
let vid = document.getElementById("video");
let progressBar = document.querySelector(".videoDuration");
let volume = document.querySelector(".volume");


play.addEventListener('click', function (e) {
    vid.play();
});

pause.addEventListener('click', function (e) {
    vid.pause();
});

vid.addEventListener('timeupdate', function (e) {
    let alltime = vid.duration;
    let curtime = vid.currentTime;
    let percent = (curtime/alltime) * 100;
    let currWidth = (progressBar.getBoundingClientRect().right - progressBar.getBoundingClientRect().left) * percent / 100;
    document.querySelector(".videoProgress").style.width = `${currWidth}px`;
});

document.querySelector(".progressBar").addEventListener('click', function(e){
    let progressLenght = progressBar.getBoundingClientRect().right - progressBar.getBoundingClientRect().left;
    vid.currentTime = (event.clientX - progressBar.getBoundingClientRect().left) / progressLenght * vid.duration;
});

volume.addEventListener('click', function (e) {
    currentVolume = (event.clientX - volume.getBoundingClientRect().left);
    if (currentVolume < 0) {currentVolume =0 };
    vid.volume = currentVolume/100;
    document.querySelector(".volumeProgress").style.width = `${currentVolume}px`;
});