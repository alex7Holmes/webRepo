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
var baseImageUrl = null;
var configData = null;
var altData = null;
var month = null;
var year = null;
var day = null;

//function to get data from API
const getComics = () => {
    fetch(baseURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        //all api data
        configData = data;
        baseImageUrl = data.img;
        altData = data.alt;
  
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
    }
}

const getDate = () => {
    month = data.month;
    year = data.year;
    day = data.day;
}

getComics();
nextComic();
