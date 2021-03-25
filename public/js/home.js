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


var baseURL = "https://xkcd.com/info.0.json";
var baseImageUrl = null;
var configData = null;


//function to get data from API
const getComics = () => {
    axios.get(baseURL)
    .then(response => {
        configData = response.data;
        baseImageUrl = response.data.img;
        const comicTitle = response.data.title;
        console.log(configData);
        // console.log('COMICS', baseImageUrl);
        document.querySelector('#comicTitle').innerHTML = comicTitle;
        document.querySelector("#comics").innerHTML = baseImageUrl;


        var img = document.createElement('IMG');
        img.setAttribute("src", baseImageUrl);
        document.body.appendChild(img);
    })
    .catch(err => console.log(err));
}

// const createComics = (comics) => {
//     for (let comic of comics) {
//         const img = document.createElement('IMG');
//     }
// }

getComics();

