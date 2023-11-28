//var request = new XMLHttpRequest();
//request.open("GET" ,"https://restcountries.com/v3.1/all");
//request.send();
//request.onload  = function(){
  //  var result=JSON.parse(request.response);
    //for(var i=0;i<=result.length;i++){
      // var country =  result[i];
       //console.log(country);
   //}
  //console.log(result);
//}



//Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    var result = JSON.parse(request.response);
    
    var asiaCountries = result.filter((element) => element.region === 'Asia');

     asiaCountries.forEach((country) => {
        console.log(country.name.common);
    });
}


