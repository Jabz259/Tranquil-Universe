const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
// import {apiKey} from 'apiKey.js';
const apiAccess = new ApiKey();
//HIDE YOUR DAMN API KEY, WE CANNOT COMMIT IF WE CANNOT HIDE IT
const apiKey = apiAccess.apiKey;

//Selecting our HTML elements
const title = document.querySelector('#title');
const copyright = document.querySelector('#copyright');
const mediaSection = document.querySelector('#media-section');
const information = document.querySelector('#description');
const dateInput = document.querySelector('#datepicker')

//experimenting
let date = "&date=" + "date(yyyy-mm-dd)" + "&";
//create new object of the current date and ISOS is the date format and we are slicing the string upto 10 characters
const currentdate = new Date().toISOString().slice(0, 10);
//setting min max, first photo published was on the 1995-06-16
dateInput.max = currentdate;
dateInput.min = "1995-06-16";


//fetch api data
function fetchData() {
    try {
        fetch(baseUrl + apiKey).then(Response => Response.json())
            .then(json => {
                displayTitle(json);
                displayCopyright(json);
                displayMedia(json);
                displaydata(json);

            })
    } catch (error) {
        console.log(error);
    }
}

//adding containers to hold our media temporarily
const imageSection =
    `<a id="hdimg" href="" target="-blank">
     <div class="">
     <img id="image_of_the_day" src="" alt="image-by-nasa">
     </div>
     </a>`

const videoSection =
    `<div class="video-div">
     <iframe id="videoLink" src="" frameborder="0"></iframe>
     </div>`

//display functions
function displayTitle(data) {
    title.innerHTML = data.title;
}

function displayCopyright(data) {
    if (data.hasOwnProperty('copyright')) {
        copyright.innerHTML = data.copyright;
    } else {
        copyright.innerHTML = "N/A";
    }
}

function displayMedia(data) {
    // not sure what the syntax here is doing?
    if (data.media_type == "video") {
        mediaSection.innerHTML = videoSection;
        document.getElementById("videoLink").src = data.url;
    } 
    
        mediaSection.innerHTML = imageSection;
        document.getElementById("hdimg").href = data.hdurl;
        document.getElementById("image_of_the_day").src = data.url;
}

function displaydata(data) {
    information.innerHTML = data.explanation;
}

//calling methods
fetchData();
