const year = document.getElementById('year'); // Selects the HTML element with the ID "year"
const thisYear = new Date().getFullYear();    // Gets the current year (e.g., 2024)
year.setAttribute('datetime', thisYear);      // Sets the "datetime" attribute of the element to the current year
year.textContent = thisYear;                  // Updates the text content of the element to show the current year

