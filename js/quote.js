const url =
  "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";

var tweet;

function setQuote(quote) {
  $("#display").val(quote);
  $("#display").css("color", "black");
}

function tweetQuote(quote) {
  window.open("https://twitter.com/intent/tweet?text=" + quote);
}

function getQuote() {
  $.getJSON(url, function(data) {
    let quote = `${data.quoteText} -${data.quoteAuthor}`
    setQuote(quote);
    tweet = quote;
  });
}

$(document).ready(() => {
  getQuote();
  changeColor();
  
  $("#quote").click(() => {
    getQuote();
    changeColor();
  });

  $("#tweet").click(() => {
    tweetQuote(tweet);
  });
});