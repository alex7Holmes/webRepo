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


//function to get data from API
const getComics = () => {
    fetch(baseURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        configData = data;
        baseImageUrl = data.img;
        const comicTitle = data.title;
     
        // console.log('COMICS', baseImageUrl);
        document.querySelector('#comicTitle').innerHTML = comicTitle;
        // document.querySelector("#comics").innerHTML = baseImageUrl;

     
        // document.body.appendChild(title);
        var img = document.createElement('img');
        img.setAttribute("src", baseImageUrl);
        var src = document.getElementById("image");
        src.appendChild(img);
        // document.body.appendChild(img);
    })
    .catch(err => console.log(err));
}

getComics();

