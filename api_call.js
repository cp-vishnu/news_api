const api_key = '987fd2b6acb94491b75dca9d37ccf8bc'


const url ='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=987fd2b6acb94491b75dca9d37ccf8bc'



var xhr = new XMLHttpRequest();

// Set up the request
xhr.open('GET', url, true); // Replace "/api/data" with the URL of your API endpoint
// xhr.setRequestHeader('Content-Type', 'application/json');

// Set up event handlers for the response
xhr.onload = function () {
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    for (let i = 0; i < data.articles.length; i++) {
     
      var card = document.createElement("div");
      card.classList.add("card", "m-3");
      card.innerHTML = '<div class="row g-0">' +
        '<div class="col-md-4">' +
        '<img src="..." class="img-fluid rounded-start" alt="...">' +
        '</div>' +
        '<div class="col-md-8">' +
        '<div class="card-body">' +
        ' <h5 class="card-title "><span class="text-info">Author : </span>'+data.articles[i].author+'</h5>' +

        '<h3 class="card-text">'+data.articles[i].title+'</h3>' +
        '<p class="card-text"><a class="text-primary h6" href="' + data.articles[i].url+'">'+data.articles[i].url+'</a></p>' +
        '<h6><span class="text-danger">Published on : </span>' + data.articles[i].publishedAt+'</h6>'+
        '</div>' +
        '</div>' +
        '</div>'
        ;

      var parent = document.getElementById("card-parent");
      parent.appendChild(card);
     
    }
    console.log(data)
    console.log(data.articles[0].url);
    

    
  } else {
    console.error('Request failed.  Returned status of ' + xhr.status);
  }
};

xhr.onerror = function () {
  console.error('Request failed.  There was a network error.');
};

// Send the request
xhr.send();

