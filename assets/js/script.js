const video = document.querySelector("#myVideo");
const SvgMain = document.querySelector(".form__video-play");
const circleSvg = document.querySelector("#circle");
const playBtn = document.querySelector("#from_pause_to_play");
const pauseBtn = document.querySelector("#from_play_to_pause");

// 
SvgMain.style.cursor = "pointer";

// play video function is for play video with svg aplay button animation
const playVideo = () => {
    if (circleSvg.classList.contains('play')) {
        video.pause();
        circleSvg.classList.remove('play');
        playBtn.beginElement();
    } else {
        circleSvg.classList.add('play');
        pauseBtn.beginElement();
        video.play();
        setTimeout(() => {
            SvgMain.style.display = "none";
        }, 500);
    }
}
const showBtn = () => {
    SvgMain.style.display = "block";
};
const hideBtn = () => {
    SvgMain.style.display = "none";
};


video.addEventListener('mouseover', showBtn)
video.addEventListener('click', showBtn)
video.onended = () => {
    SvgMain.style.display = "block";
    video.pause();
    circleSvg.classList.remove('play');
    playBtn.beginElement();
}

video.addEventListener('mouseout', hideBtn);
SvgMain.addEventListener('mouseover', showBtn);
playBtn.beginElement();
SvgMain.addEventListener('click', playVideo);