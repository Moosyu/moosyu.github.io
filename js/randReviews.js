(function newReviews() {
    var text = data.reviews;
    document.getElementById('reviews').innerHTML = text[Math.floor(Math.random() * text.length)];
  }());