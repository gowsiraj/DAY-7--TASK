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

//Print the following details name, capital, flag, using forEach function

var request = new XMLHttpRequest();
request.open("GET" ,"https://restcountries.com/v3.1/all");
request.send();
request.onload  = function(){
    var result=JSON.parse(request.response);
    result.forEach(function(element)
    {
console.log(element.name);
console.log(element.capital);
console.log(element.flag);

    });
}
