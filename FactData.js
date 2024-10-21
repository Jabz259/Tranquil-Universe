


factArr = [
    "It would take nine years to walk to the moon",
    "Mars is called the Red Planet because of its red coloring, which comes from the large amount of iron oxide – known on Earth as rust – on the planet’s surface",
    "Mercury’s temperature varies from -280° F on its night side to 800° F during the day",
    "If you can spot the Andromeda Galaxy with your naked eyes, you can see something 14.7 billion billion miles away",
    "The Sun is 400 times larger than the Moon, but also 400 times as far away, making both objects appear to be the same size in our sky",
    "Jupiter is the largest planet. It could contain the other seven planets in just 70 percent of its volume",
    "Stars don’t twinkle until their light passes through Earth’s atmosphere",
    "If Earth were the size of a tennis ball, the Sun would be a sphere 24 feet across, approximately 0.5 mile away",
    "Of the 9,113 official features on the Moon, a mere 421 (4.6 percent) are not craters",
    "Driving a car to the nearest star at 70 mph would take more than 356 billion years"
]



function randomFact() {
    const rng = Math.floor(Math.random() * factArr.length);    
    return factArr[rng];
}

function displayFact(fact) {
    const factElement = document.querySelector("#astronomy-fact")
    factElement.innerHTML = fact; 
}

displayFact(randomFact());








//  factArr.forEach(element => {
//     if(element ==)

//    console.log(factArr[element])

//  });