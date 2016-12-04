const lineBreakChar = "%0D%0A";

function quote(text, author) {
  this.author = author;
  this.text = text;
};

function showRandomQuote() {
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/",
    data: {
      lang: "en",
      format: "jsonp",
      method: "getQuote"
    },
    dataType: "jsonp",
    jsonp: "jsonp",
    success: function(data) {
      var randomQuote = new quote(data.quoteText, data.quoteAuthor);
      $("#quoteBoxText").text(randomQuote.text);
      $("#quoteBoxAuthor").text(randomQuote.author);
    },
  });
}

showRandomQuote();

$("#newQuoteButton").click(function() {
  showRandomQuote();
});

$("#tweetButton").click(function() {
  var twitterShareLink = "https://www.twitter.com/intent/tweet?text=" + $("#quoteBoxText").text().replace(/;/g, "%3B") + lineBreakChar + "-" + $("#quoteBoxAuthor").text();
  $("#twitterShareLink").attr("href", twitterShareLink);
});
