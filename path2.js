const music = document.querySelector('audio');
const play = document.getElementById('play');
const img = document.querySelector('img');
const title = document.querySelector('#title');
const singer = document.querySelector('#singer');
const forward = document.querySelector('#forward');
const backward = document.querySelector('#backward');
let isPlaying = false;
const Songs = [
    {
        name: "Baby",
        title: "Baby",
        singer: "Justin Bieber"
    },
    {
        name: "Batoon Ko Teri",
        title: "Batoon Ko",
        singer: "Arijit Singh"
    },
    {
        name: "Dil Ko Karar",
        title: "Dil Ko Karar",
        singer: "Rajat Nagpal"
    }, {
        name: "Filhaal 2",
        title: "Fihaal 2",
        singer: "B Praak"
    }, {
        name: "Humraah",
        title: "Humraah",
        singer: "Sachet Tandon"
    },
    {
        name: "Number Likh",
        title: "Number Likh",
        singer: "Tonny Kakkar"
    },
    {
        name: "Ranjha",
        title: "Ranjha",
        singer: "B Praak - Jasleen"
    },
    {
        name: "Rata Lambiya",
        title: "Rata Lambiya",
        singer: "Jubin - Asees kaur"
    },
    {
        name: "Sakhiyan 2",
        title: "Sakhiyan 2",
        singer: "Maninder Buttar"
    }]
// for playing
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime');
};
// to pause
const pauseMusic = () => {
    isPlaying = false;
    play.classList.replace('fa-pause', 'fa-play');
    music.pause();
    img.classList.remove('anime');
};
play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});

const loadSong = (Songs) => {
    title.textContent = Songs.title;
    singer.textContent = Songs.singer;
    music.src = `music/${Songs.name}.mp3`;
    img.src = `image/${Songs.name}.jpg`;
    console.log(Songs.title);
}
SongsIndex=0;
const nextSong=()=>{
    SongsIndex=(SongsIndex+1)%Songs.length;
    loadSong(Songs[SongsIndex]);
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime');
    // playMusic();
}
const prevSong=()=>{
    SongsIndex=(SongsIndex-1+Songs.length)%Songs.length;
    loadSong(Songs[SongsIndex]);
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime');
    // playMusic();
}
forward.addEventListener('click',nextSong);
backward.addEventListener('click',prevSong);