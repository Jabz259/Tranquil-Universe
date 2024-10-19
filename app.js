const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiAccess = new ApiKey();
const apiKey = apiAccess.apiKey;

//Selecting our HTML elements
const title = document.querySelector('#title');
const date = document.querySelector('#date');
const copyright = document.querySelector('#copyright');
const mediaSection = document.querySelector('#media-section');
const information = document.querySelector('#description');

const apod = document.querySelector("#image");
// const apod = document.getElementById("#image");

//fetch api data
function fetchData() {
    try {
        fetch(baseUrl + apiKey).then(Response => Response.json())
            .then(json => {
                displayTitle(json);
                displayDate(json);
                displayCopyright(json);
                displayMedia(json);
                displaydata(json);
                console.log(json);
                //console.log(json.date);
            })
    } catch (error) {
        console.log(error);
    }
}



//display functions
function displayTitle(data) {
    title.innerHTML = data.title;
}

function displayDate(data) {
    
    date.innerHTML = data.date;
}


function displayCopyright(data) {
    if (data.hasOwnProperty('copyright')) {
        copyright.innerHTML = data.copyright;
    } else {
        copyright.innerHTML = "N/A";
    }
}


function displayMedia(data) {

    //testing variable
     const media = "video";

    try {
        if (data.media_type == "video") {
        // if (media == "video"){
             // if 
            const videoSection =
            `<div class="video-div">
            <iframe id="video" src="" frameborder="0"></iframe>
            </div>`
            //place iframe into container in html
            mediaSection.innerHTML = videoSection;
            
            ////placing APOD json url into video source
            document.getElementById("video").src = "https://www.youtube.com/embed/bsH33w3Qa6M";
        }
        //placing APOD json url into image source
            apod.src = data.url;
    }catch {

        console.log("ERROR!Cannot display any text")

    }


}

function displaydata(data) {
    information.innerHTML = data.explanation;
}



//calling methods
fetchData();