
//Print the country that uses US dollars as currency.
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();

request.onload = function () {
    var data = JSON.parse(this.response);

   
    var usDollarCountries = data.filter(country => country.currencies[0].code=== "$");

  
    usDollarCountries.forEach(country => {
        console.log( country.name,country.currencies[0].code);
    });
}

