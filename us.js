
//Print the country that uses US dollars as currency.
var request = new XMLHttpRequest();
request.open("GET" ,"https://restcountries.com/v3.1/all");
request.send();
request.onload  = function(){
      var result=JSON.parse(request.response);
      var currency = result.filter((ele)=>ele.currencies);
      console.log(currency);
      var money = currency.map((elem)=>elem.currencies);
      console.log(money);
      var doller = cur.filter((element)=>element.USD);
      console.log(doller); 
}

