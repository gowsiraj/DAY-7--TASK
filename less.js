
//Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    var result = JSON.parse(request.response);

    // Use filter to get countries with a defined population less than 200,000
    var countriesWithLowPopulation = result.filter((element) => 
        element.population && element.population < 200000
    );

    // Log the names of countries with low population
    countriesWithLowPopulation.forEach((country) => {
        console.log(country.name.common);
    });
}


