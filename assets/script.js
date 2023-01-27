const openweatherKey = "7f98f652b8221d925bd9fc926c6196bf";

// FUNCTION ONE: function that loads on open, and fetches weather info for adelaide. PASSES TO TWO.

// FUNCTION TWO: function that dynamically creates content inside the divs on the page. PASSES TO THREE.

// FUNCTION THREE: function that stores the fetched content in local storage (the whole object?) and creates a button in the past searches div
// if pastsearch = true will not save in local storage and will return
// will change pastsearch to false again.

// FUNCTION FIVE: function that compares searches to previous searches to work out whether to fetch from local storage or the API to be used from search button
// this will trigger a variable pastSearch = true
// this will stop FUNCTION THREE from saving it a second time in local storage and stop a new button from being created

// FUNCTION SIX: function that assembles a new fetch query for new searches. PASSES TO TWO.

// FUNCTION SEVEN: function that retrieves the information stored in local storage. PASSES TO TWO.