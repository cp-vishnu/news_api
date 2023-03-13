const api_key = '987fd2b6acb94491b75dca9d37ccf8bc'
const api_key_w = '393IfrSL9KAgcQZ5ETq9gAzZJ0NaCwxQ'
const open_api_key = '562b06e4840a4f043804515e9923a69a'
// const w_api_url ='http://api.weatherstack.com/current?access_key=75d6648efc94e552bec52f2ba0990ba1&query=London'
// const accua_url ='http://dataservice.accuweather.com/locations/v1/cities/search?apikey=393IfrSL9KAgcQZ5ETq9gAzZJ0NaCwxQ&q=kerala'
// const forcast_url = 'http://dataservice.accuweather.com/currentconditions/v1/2816554?apikey=393IfrSL9KAgcQZ5ETq9gAzZJ0NaCwxQ'

const weather_api_url = 'http://api.weatherapi.com/v1/current.json?key=ebada3cd4e884097836112926231303&q=kerala&aqi=no'

var xhr2 = new XMLHttpRequest();

xhr2.open('GET', weather_api_url, true)



xhr2.onload = function () {
  if (xhr2.status === 200) {
    var data = JSON.parse(xhr2.responseText);
    console.log(data)
    console.log(data.current.temp_c)
    console.log(data.current.condition.text)

    var w_div = document.createElement("div");
    var parent_li = document.getElementById("weather_data");

    w_div.innerHTML = '<div>' + '<span><img src="' + data.current.condition.icon + '" class="icon-img"></span>' +
      '<span class="text-danger fs-1">' + data.current.temp_c + '<sup>oc</sup></span>' +
      '</div>' +
      '<div>' +
      '<span class="text-info fs-4">' + data.current.condition.text + '</span>'
      + '</div>' +
      '<span class="text-muted">' + data.location.name + '</span>'


    parent_li.appendChild(w_div);
  }
  else {
    console.error('Request failed.  Returned status of' + xhr2.status);
  }
}
xhr2.onerror = function () {
  console.error('Request failed.  There was a network error.');
};


xhr2.send();


var card_hide = document.getElementById('card-hide')

const url = 'https://gnews.io/api/v4/top-headlines?category=general&lang=ml&country=in&max=10000&apikey=0b2afae99663bde94b2d589955b1c6b2'



var xhr = new XMLHttpRequest();


xhr.open('GET', url, true);


xhr.onload = function () {
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    var parent = document.getElementById("card-hide");
    parent.innerHTML = "";

    for (let i = 0; i < data.articles.length; i++) {
      var card_hide = document.createElement("div");
      card_hide.classList.add("card", "m-3");
      card_hide.innerHTML = '<div class="row g-0">' +
        '<div class="col-md-4">' +
        '<img src="' + data.articles[i].image + '" class="img-fluid rounded-start" alt="...">' +
        '</div>' +
        '<div class="col-md-8">' +
        '<div class="card-body">' +
        ' <h6 class="card-title "><span class="text-info">source : </span>' + data.articles[i].source.name + '</h6>' +

        '<h5 class="card-text">' + data.articles[i].title + '</h5>' +
        '<p>' + data.articles[i].description + '</p>' +
        '<p class="card-text"><a class="text-primary h6" href="' + data.articles[i].url + '">' + data.articles[i].url + '</a></p>' +
        '<h6><span class="text-danger">Published on : </span>' + data.articles[i].publishedAt + '</h6>' +
        '</div>' +
        '</div>' +
        '</div>'
        ;

      // var parent = document.getElementById("card-parent");
      parent.appendChild(card_hide);

    }
    console.log(data)
    console.log(data.articles[0].source.name);



  } else {
    console.error('Request failed.  Returned status of ' + xhr.status);
  }
};

xhr.onerror = function () {
  console.error('Request failed.  There was a network error.');
};


xhr.send();

const mySelect = document.querySelector("#mySelect");
mySelect.addEventListener("change", () => {
  var value = mySelect.value
  const url = 'https://gnews.io/api/v4/top-headlines?category=' + value + '&lang=ml&country=in&max=10000&apikey=0b2afae99663bde94b2d589955b1c6b2'



  var xhr = new XMLHttpRequest();


  xhr.open('GET', url, true);
  // xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function () {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var parent = document.getElementById("card-parent");
      parent.innerHTML = "";
      for (let i = 0; i < data.articles.length; i++) {

        var card = document.createElement("div");
        card.classList.add("card", "m-3");
        card.innerHTML = '<div class="row g-0">' +
          '<div class="col-md-4">' +
          '<img src="' + data.articles[i].image + '" class="img-fluid rounded-start" alt="...">' +
          '</div>' +
          '<div class="col-md-8">' +
          '<div class="card-body">' +
          ' <h6 class="card-title "><span class="text-info">source : </span>' + data.articles[i].source.name + '</h6>' +

          '<h5 class="card-text">' + data.articles[i].title + '</h5>' +
          '<p>' + data.articles[i].description + '</p>' +
          '<p class="card-text"><a class="text-primary h6" href="' + data.articles[i].url + '">' + data.articles[i].url + '</a></p>' +
          '<h6><span class="text-danger">Published on : </span>' + data.articles[i].publishedAt + '</h6>' +
          '</div>' +
          '</div>' +
          '</div>'
          ;

        // var parent = document.getElementById("card-parent");
        parent.appendChild(card);

      }
      console.log(data)
      console.log(data.articles[0].source.name);



    } else {
      console.error('Request failed.  Returned status of ' + xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error('Request failed.  There was a network error.');
  };


  xhr.send();

});