//variables for the API
// EXAMPLE BASE URL: "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}"
const openweatherKey = "7f98f652b8221d925bd9fc926c6196bf";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=";

// dayjs variables
var currentDate = dayjs().startOf('d').format("YYYY-MM-DD");
var currentTime = dayjs().startOf('h').format("H-mm-ss");
var cardoneDate = dayjs().add('1', 'day').startOf('d').format("YYYY-MM-DD");
var cardtwoDate = dayjs().add('2', 'day').format("YYYY-MM-DD");
var cardthreeDate = dayjs().add('3', 'day').format("YYYY-MM-DD");
var cardfourDate = dayjs().add('4', 'day').format("YYYY-MM-DD");
var cardfiveDate = dayjs().add('5', 'day').format("YYYY-MM-DD");

// variables to stop me typing out these timeblocks repeatedly
var middleNight = "00:00:00";
var threeAm = "03:00:00";
var sixAm = "06:00:00";
var nineAm = "09:00:00";
var middleDay = "12:00:00";
var threePm = "15:00:00";
var sixPm = "18:00:00";
var ninePm = "21:00:00";

// page variables and event listeners
var currentBox = document.getElementById('current-weather');
var cardBox = document.getElementById('card-box');
var cityInput = document.getElementById('city-search');
var searchBtn = document.getElementById('search-button');
var prevbuttonBox = document.getElementById('previous-searches');

searchBtn.addEventListener("click", searchAPI)

// FUNCTION ONE: function that loads on open, and fetches weather info for adelaide. PASSES TO TWO.
function fetchWeather (cityName) {
    buildButtons();
    if (!cityName) {
        var cityName = "Adelaide";
    }
    fetch(queryURL + cityName + "&appid=" + openweatherKey + "&units=metric")

        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (locResults) {
            compileToday(locResults);
        }) 

// Warns the user if they have misspelt their query
        .catch(function (error) {
            console.error(error);
            currentBox.textContent = "Sorry, no city by that name!";
        });

    }

// FUNCTION TWO: Compiles the data from the API into objects to be printed by function three.
function compileToday(locResults) {
    var cityName = locResults.city.name;
    console.log(cardoneDate);
    console.log(locResults);
    for (i=0; i < locResults.list.length; i++) {
        var selectedWeather = locResults.list[i];
        var todaysWeather = {};
        var cardoneWeather = {};
        var cardtwoWeather = {};
        var cardthreeWeather = {};
        var cardfourWeather = {};
        var cardfiveWeather = {};
        var comparisonTime = currentTime.split("-").shift();
        if (comparisonTime < 3) {
            if (selectedWeather.dt_txt === currentDate + " " + middleNight) {
                todaysWeather.tempmax = selectedWeather.main.temp + " C";
                todaysWeather.humidity = selectedWeather.main.humidity + " %";
                todaysWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
                todaysWeather.icon = selectedWeather.weather[0].icon;
                todaysWeather.city = locResults.city.name;
                todaysWeather.date = currentDate;
                printCards(todaysWeather);
                }
        } else if (comparisonTime >= 3 && comparisonTime < 6) {
            if (selectedWeather.dt_txt === currentDate + " " + threeAm) {
                todaysWeather.tempmax = selectedWeather.main.temp + " C";
                todaysWeather.humidity = selectedWeather.main.humidity + " %";
                todaysWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
                todaysWeather.icon = selectedWeather.weather[0].icon;
                todaysWeather.city = locResults.city.name;
                todaysWeather.date = currentDate;
                printCards(todaysWeather);
                }
        } else if (comparisonTime >= 6 && comparisonTime < 9) {
            if (selectedWeather.dt_txt === currentDate + " " + sixAm) {
                todaysWeather.tempmax = selectedWeather.main.temp + " C";
                todaysWeather.humidity = selectedWeather.main.humidity + " %";
                todaysWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
                todaysWeather.icon = selectedWeather.weather[0].icon;
                todaysWeather.city = locResults.city.name;
                todaysWeather.date = currentDate;
                printCards(todaysWeather);
                }
        } else if (comparisonTime >= 9 && comparisonTime < 12) {
            if (selectedWeather.dt_txt === currentDate + " " + nineAm) {
                todaysWeather.tempmax = selectedWeather.main.temp + " C";
                todaysWeather.humidity = selectedWeather.main.humidity + " %";
                todaysWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
                todaysWeather.icon = selectedWeather.weather[0].icon;
                todaysWeather.city = locResults.city.name;
                todaysWeather.date = currentDate;
                printCards(todaysWeather);
                }
        } else if (comparisonTime >= 12 && comparisonTime < 15) {
            if (selectedWeather.dt_txt === currentDate + " " + middleDay) {
                todaysWeather.tempmax = selectedWeather.main.temp + " C";
                todaysWeather.humidity = selectedWeather.main.humidity + " %";
                todaysWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
                todaysWeather.icon = selectedWeather.weather[0].icon;
                todaysWeather.city = locResults.city.name;
                todaysWeather.date = currentDate;
                printCards(todaysWeather);
                }
        } else if (comparisonTime >= 15 && comparisonTime < 18) {
            if (selectedWeather.dt_txt === currentDate + " " + threePm) {
                todaysWeather.tempmax = selectedWeather.main.temp + " C";
                todaysWeather.humidity = selectedWeather.main.humidity + " %";
                todaysWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
                todaysWeather.icon = selectedWeather.weather[0].icon;
                todaysWeather.city = locResults.city.name;
                todaysWeather.date = currentDate;
                printCards(todaysWeather);
            }
        } else if (comparisonTime >= 18 && comparisonTime < 21) {
            if (selectedWeather.dt_txt === currentDate + " " + sixPm) {
                todaysWeather.tempmax = selectedWeather.main.temp + " C";
                todaysWeather.humidity = selectedWeather.main.humidity + " %";
                todaysWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
                todaysWeather.icon = selectedWeather.weather[0].icon;
                todaysWeather.city = locResults.city.name;
                todaysWeather.date = currentDate;
                printCards(todaysWeather);
                }
        } else if (comparisonTime >= 21) {
            if (selectedWeather.dt_txt === currentDate + " " + ninePm) {
                todaysWeather.tempmax = selectedWeather.main.temp + " C";
                todaysWeather.humidity = selectedWeather.main.humidity + " %";
                todaysWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
                todaysWeather.icon = selectedWeather.weather[0].icon;
                todaysWeather.city = locResults.city.name;
                todaysWeather.date = currentDate;
                printCards(todaysWeather);
                }
        }
        if (selectedWeather.dt_txt === cardoneDate + " " + middleDay) {
            cardoneWeather.tempmax = selectedWeather.main.temp + " C";
            cardoneWeather.humidity = selectedWeather.main.humidity + " %";
            cardoneWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
            cardoneWeather.icon = selectedWeather.weather[0].icon;
            cardoneWeather.city = locResults.city.name;
            cardoneWeather.date = cardoneDate;
            printCards(cardoneWeather);
        }
        if (selectedWeather.dt_txt === cardtwoDate + " " + middleDay) {
            cardtwoWeather.tempmax = selectedWeather.main.temp + " C";
            cardtwoWeather.humidity = selectedWeather.main.humidity + " %";
            cardtwoWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
            cardtwoWeather.icon = selectedWeather.weather[0].icon;
            cardtwoWeather.city = locResults.city.name;
            cardtwoWeather.date = cardtwoDate;
            printCards(cardtwoWeather);
        }  
        if (selectedWeather.dt_txt === cardthreeDate + " " + middleDay) {
            cardthreeWeather.tempmax = selectedWeather.main.temp + " C";
            cardthreeWeather.humidity = selectedWeather.main.humidity + " %";
            cardthreeWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
            cardthreeWeather.icon = selectedWeather.weather[0].icon;
            cardthreeWeather.city = locResults.city.name;
            cardthreeWeather.date = cardthreeDate;
            printCards(cardthreeWeather);
        }
        if (selectedWeather.dt_txt === cardfourDate + " " + middleDay) {
            cardfourWeather.tempmax = selectedWeather.main.temp + " C";
            cardfourWeather.humidity = selectedWeather.main.humidity + " %";
            cardfourWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
            cardfourWeather.icon = selectedWeather.weather[0].icon;
            cardfourWeather.city = locResults.city.name;
            cardfourWeather.date = cardfourDate;
            printCards(cardfourWeather);
        }
        if (selectedWeather.dt_txt === cardfiveDate + " " + middleNight) {
            cardfiveWeather.tempmax = selectedWeather.main.temp + " C";
            cardfiveWeather.humidity = selectedWeather.main.humidity + " %";
            cardfiveWeather.wind = Math.floor(selectedWeather.wind.speed * 1.60934) + " Kp/h";
            cardfiveWeather.icon = selectedWeather.weather[0].icon;
            cardfiveWeather.city = locResults.city.name;
            cardfiveWeather.date = cardfiveDate;
            printCards(cardfiveWeather);
        }
}
}
// FUNCTION THREE: function that dynamically creates content inside the divs on the page.
function printCards({tempmax, humidity, wind, icon, city, date}) {
    if (date === currentDate) {
        var cardheaderDiv = document.createElement('div');
            cardheaderDiv.className += "today-header";
        var cardHeading = document.createElement('h2');
            cardHeading.className += "today-title";
            cardHeading.textContent = "The Weather right now in " + city + " for " + date;
        var leftDiv = document.createElement('div');
            leftDiv.className += "left-current-div";
        var cardImage = document.createElement('img');
            cardImage.src = "http://openweathermap.org/img/w/" + icon + ".png";
            cardImage.alt = "weather-icon";
            cardImage.className += "current-icon";
        var rightDiv = document.createElement('div');
            rightDiv.className += "right-current-div";
        var listElement = document.createElement('ul');
            listElement.className += "current-list";
        var listitemOne = document.createElement('li');
            listitemOne.textContent = "Current Temperature: " + tempmax;
        var listitemTwo = document.createElement('li');
            listitemTwo.textContent = "Current Windspeed: " + wind;
        var listitemThree = document.createElement('li'); 
            listitemThree.textContent = "Current Humidity: " + humidity;
            listElement.append(listitemOne, listitemTwo, listitemThree);
            cardheaderDiv.append(cardHeading);
            leftDiv.append(cardImage);
            rightDiv.append(listElement);
            currentBox.append(cardheaderDiv, leftDiv, rightDiv);
    } else {
        var weatherCard = document.createElement('div');
            weatherCard.className += "weather-card";
        var cardHeader = document.createElement('div');
            cardHeader.className += "card-header";
        var carddateTitle = document.createElement('h3');
            carddateTitle.className += "date-title";
            carddateTitle.textContent = date;
        var cardIcon = document.createElement('img');
            cardIcon.src = "http://openweathermap.org/img/w/" + icon + ".png";
            cardIcon.alt = "weather-icon";
            cardIcon.className += "card-icon";
        var listElement = document.createElement('ul');
            listElement.className += "card-list";
        var listitemOne = document.createElement('li');
            listitemOne.textContent = "Forecast Temperature: " + tempmax;
        var listitemTwo = document.createElement('li');
            listitemTwo.textContent = "Forecast Windspeed: " + wind;
        var listitemThree = document.createElement('li'); 
            listitemThree.textContent = "Forecast Humidity: " + humidity;
            listElement.append(listitemOne, listitemTwo, listitemThree);
            cardHeader.append(carddateTitle, cardIcon);
            weatherCard.append(cardHeader, listElement);
            cardBox.append(weatherCard);

    }
}

// FUNCTION FOUR: function that assembles a new fetch query for new searches. PASSES TO TWO.
function searchAPI () {
    clearBoxes();
    clearButtons();
    var cityName = cityInput.value.trim();
    storeCity(cityName);
    fetchWeather(cityName);
}
// FUNCTION FIVE (a + b): Functions that clear page of dynamic elements to make way for new ones.
function clearBoxes() {
    while (currentBox.firstChild) {
        currentBox.removeChild(currentBox.lastChild);
     }
    while (cardBox.firstChild) {
        cardBox.removeChild(cardBox.lastChild);
     }
}

function clearButtons() {
    while (prevbuttonBox.firstChild) {
        prevbuttonBox.removeChild(prevbuttonBox.lastChild);
     }
}

// FUNCTION SIX: Function that saves searched citynames in local storage.
function storeCity(cityName) {
    var holderArray = {};
    if ("cityName" in localStorage) {
            holderArray = JSON.parse(localStorage.getItem("cityName"));
            holderArray = holderArray + " " + cityName;
            // holderArray.push(cityName);
            localStorage.setItem("cityName", JSON.stringify(holderArray));
    
    } else { 
            localStorage.setItem("cityName", JSON.stringify(cityName));
    }        
    cityInput.value = "";
    buildButtons();
}

//FUNCTION SEVEN: Function that builds the buttons containing previous searches from data pulled from local storage
function buildButtons() {
        clearButtons();
    if ("cityName" in localStorage) {
        var holderString = JSON.parse(localStorage.getItem("cityName"));
        console.log(holderString);
        var splitString = holderString.split(" ");
        for (i=0; i < splitString.length; i++) {
            var selectedValue = splitString[i];
            var newButton = document.createElement('button');
                newButton.className += "pre-button";
                newButton.textContent = selectedValue;
                prevbuttonBox.append(newButton);
                
                newButton.addEventListener("click", function (event){
                tempVal = event.currentTarget;
                cityName = tempVal.textContent;
                clearBoxes();
                fetchWeather(cityName);
                })
        }
    } else {
        return;
    }
}
fetchWeather();
