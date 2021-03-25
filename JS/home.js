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

import axios from 'axios';


var baseURL = "http://xkcd.com/info.0.json";
var baseImageUrl = null;
var configData = null;

//function to get data from API
const getComics = () => {
    axios.get(baseURL)
    .then(response => {
        configData = response.data;
        baseImageUrl = response.data.img;
        const comicTitle = response.data.title;
        console.log(allData);
        console.log('COMICS', comicImage);
        document.querySelector("#comics").innerHTML = comicImage;
    })
    .catch(err => console.log(err));
}
console.log("helloooooo");
getComics();

