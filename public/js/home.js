// "month": "3",
// "num": 2440,
// "link": "",
// "year": "2021",
// "news": "",
// "safe_title": "Epistemic Uncertainty",
// "transcript": "",
// "alt": "Luckily, unlike in our previous study, we have no reason to believe Evangeline the Adulterator gained access to our stored doses.",
// "img": "https://imgs.xkcd.com/comics/epistemic_uncertainty.png",
// "title": "Epistemic Uncertainty",
// "day": "22"

var baseURL = "https://thawing-brook-02893.herokuapp.com/https://xkcd.com/info.0.json";


var latestComicUrl = "https://thawing-brook-02893.herokuapp.com/https://xkcd.com/info.0.json";
var latestComicId = null;
var currentComic = 0;

var baseImageUrl = null;
var configData = null;
var altData = null;
var month = null;
var year = null;
var day = null;


const urlParams = new URLSearchParams(window.location.search);
const comicId = parseInt(urlParams.get('id'));


//function to get data from API
const getLatestComicId = () => {
    fetch(latestComicUrl)
    .then(response => response.json())
    .then(data => {
        //all api data
        configData = data;
        latestComicId = data.num;
    })
    .catch(err => console.log(err));
}


//function to get data from API
const getComics = () => {
    getLatestComicId();
    // && comicId <= latestComicId
    if(comicId) {
        baseURL = "https://thawing-brook-02893.herokuapp.com/https://xkcd.com/" + comicId + "/info.0.json";
    };
    console.log(latestComicId);


    fetch(baseURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        //all api data
        configData = data;
        baseImageUrl = data.img;
        altData = data.alt; 
        currentComic = data.num;

        //get title
        const comicTitle = data.title;
        document.querySelector('#comicTitle').innerHTML = comicTitle;
        //get image
        var img = document.createElement('img');
        img.setAttribute("src", baseImageUrl);
        var src = document.getElementById("image");
        src.appendChild(img);
        //get alt
        document.querySelector('#description').innerHTML = altData;
    })
    .catch(err => console.log(err));
}

const nextComic = () => {
    document.getElementById("next").onclick = function() {
        console.log("next clicked!");

        let nextComicId = 1;

        if (comicId && comicId !== latestComicId ) {
            nextComicId = comicId + 1;
        }
        // console.log(latestComicId);
        // console.log(comicId);
        // console.log(nextComicId);
        window.location.href = '?id=' + nextComicId;
    }
}

const prevComic = () => {
    document.getElementById("previous").onclick = function() {
        console.log("next clicked!");

        var prevComicId;

        if (currentComic === 1) {
            prevComicId = latestComicId;
        } else {
            prevComicId = currentComic - 1;
        }

        window.location.href = '?id=' + prevComicId;
    }
};

const getDate = () => {
    month = data.month;
    year = data.year;
    day = data.day;
}



getComics();
prevComic();
nextComic();