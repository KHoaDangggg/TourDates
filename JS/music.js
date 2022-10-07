var songs = [
    {
        name: "Mãi mãi bên nhau",
        singer: "Noo Phước Thịnh",
        path: "../sources/music/Song1.mp3",
        image: "../sources/Images/Song1.jpg",
    },
    {
        name: "Hẹn em dưới ánh trăng",
        singer: "HIEUTHUHAI, HURRYKNG",
        path: "../sources/music/Song2.mp3",
        image: "../sources/Images/Song2.jpg",
    },
    {
        name: "Chỉ một đêm nữa thôi",
        singer: "MCK, Tlinh",
        path: "../sources/music/Song3.mp3",
        image: "../sources/Images/Song3.jpg",
    },
    {
        name: "Waiting for you",
        singer: "MONO",
        path: "../sources/music/Song4.mp3",
        image: "../sources/Images/Song4.jpg",
    },
    {
        name: "Giá như anh lặng im",
        singer: "Only C, Lou Hoàng",
        path: "../sources/music/Song5.mp3",
        image: "../sources/Images/Song5.jpg",
    },
    {
        name: "Khó vẽ nụ cười",
        singer: "Đạt G, Du Uyên",
        path: "../sources/music/Song6.mp3",
        image: "../sources/Images/Song6.jpg",
    },
];
// Set variables
const cd = document.querySelector(".cd-thumb");
const cd_width = cd.offsetWidth;
const cd_height = cd.offsetHeight;
const audio = document.querySelector("#audio");
const playBtn = document.querySelector(".btn.btn-toggle-play");
const iconPause = document.querySelector(".icon-pause");
const iconPlaying = document.querySelector(".icon-play");
const headerSongName = document.querySelector("header h2");
const headerSongImg = document.querySelector(".cd-thumb");
const audioPosition = document.querySelector("input#progress");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const randomBtn = document.querySelector(".btn-random");
const repeatBtn = document.querySelector(".btn-repeat");
const playlist = document.querySelector(".playlist");
var currentIndex = 0;
console.log(audio);
const app = {
    songs,
    isPlaying: false,
    isRandom: true,
    isRepeat: true,

    eventHandler: function () {
        // Handle CD thumb rotate
        const cdRotate = cd.animate(
            [
                {
                    transform: "rotate(360deg)",
                },
            ],
            {
                duration: 10000,
                iterations: Infinity,
            }
        );
        cdRotate.pause();

        // Handle scroll
        headerSongName.innerText = `${this.currentSong.name}`;

        // Handle song play
        playBtn.onclick = function () {
            if (!app.isPlaying) {
                app.audioPlaying();
                cdRotate.play();
            } else {
                app.audioPausing();
                cdRotate.pause();
            }
        };
        // Handle play position
        audio.ontimeupdate = function () {
            if (audio.duration) {
                audioPosition.value =
                    (audio.currentTime / audio.duration) * 100;
            }
        };
        audioPosition.onchange = function () {
            audio.currentTime = (audioPosition.value * audio.duration) / 100;
        };
        // Handle switch song
        nextBtn.onclick = function () {
            if (!app.isRandom) {
                app.getRandomSong();
            } else {
                app.nextSong();
            }
            cdRotate.pause();
            app.audioPausing();
        };
        prevBtn.onclick = function () {
            if (!app.isRandom) {
                app.getRandomSong();
            } else {
                app.prevSong();
            }
            cdRotate.pause();
            app.audioPausing();
        };
        // Handle toggle
        randomBtn.onclick = function () {
            app.isRandom = !app.isRandom;
            randomBtn.classList.toggle("active");
        };
        // Handle next when song end
        audio.onended = function () {
            if (!app.isRandom) {
                app.getRandomSong();
                audio.play();
            } else {
                app.nextSong();
                audio.play();
            }
        };
        // Handle audio repeat
        repeatBtn.onclick = function () {
            if (repeatBtn.classList.toggle("active")) {
                audio.loop = true;
            } else {
                audio.loop = false;
                app.isRepeat = !app.isRepeat;
            }
        };
        // Handle change song when click
        playlist.onclick = function (e) {
            var songNode = e.target.closest(".song:not(.active)");
            if (songNode || e.target.closest(".option")) {
                if (songNode) {
                    currentIndex = Number(songNode.dataset.index);
                    console.log(songNode.dataset.index, songNode);
                    app.currentSong = app.songs[currentIndex];
                    app.loadCurrentSong();
                    audio.play();
                    app.audioPlaying();
                    cdRotate.play();
                }
            }
        };
    },
    scrollIntoView() {
        setTimeout(function () {
            document.querySelector(".song.active").scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }, 200);
    },
    audioPlaying() {
        audio.play();
        this.isPlaying = true;
        document.querySelector(".player").classList.add("playing");
    },
    audioPausing() {
        audio.pause();
        this.isPlaying = false;
        document.querySelector(".player").classList.remove("playing");
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            value: this.songs[0],
            writable: true,
        });
    },
    loadCurrentSong() {
        headerSongName.innerText = `${this.currentSong.name}`;
        headerSongImg.style.backgroundImage = `url(${this.currentSong.image})`;
        audio.src = this.currentSong.path;
        this.renderSong();
        this.scrollIntoView();
    },
    nextSong() {
        currentIndex++;
        if (currentIndex >= app.songs.length) {
            currentIndex = 0;
        }
        app.currentSong = app.songs[currentIndex];
        app.loadCurrentSong();
        audioPosition.value = "0";
    },
    prevSong() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = app.songs.length - 1;
        }
        app.currentSong = app.songs[currentIndex];
        app.loadCurrentSong();
        audioPosition.value = "0";
    },
    getRandomSong() {
        var newCurrentIndex = 0;
        do {
            newCurrentIndex = Math.floor(Math.random() * songs.length);
        } while (newCurrentIndex === currentIndex);
        currentIndex = newCurrentIndex;
        this.currentSong = this.songs[currentIndex];
        this.loadCurrentSong();
    },
    renderSong: function () {
        var list = this.songs;
        var html = list.map(function (Element, index) {
            return `
            <div data-index = ${index} class="song ${index === currentIndex ? "active" : ""}"  >
            <div class="thumb" style="background-image: url(${Element.image})">
            </div>
            <div class="body">
              <h3 class="title">${Element.name}</h3>
              <p class="author">${Element.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
            `;
        });
        playlist.innerHTML = html.join("");
    },
    start: function () {
        this.defineProperties();
        this.eventHandler();
        this.loadCurrentSong();
        this.renderSong();
        this.nextSong();
    },
};

// Start
app.start();
// playBtn.onclick = function () {
//     console.log
// };
