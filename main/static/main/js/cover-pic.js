function loadCoverPic(container, static_url) {
  var photos = ['balloon', 'water', 'mountains', 'houses', 'concert'];
  var randomImage = photos[Math.floor(Math.random() * photos.length)];
  var imageURL = 'main/img/banner/' + randomImage + '.jpg';
  $(container).css("background", "url(" + static_url + imageURL + ") no-repeat center center scroll");
  $(container).css("background-size", "cover");
  $(container).css("-webkit-background-size", "cover");
  $(container).css("-moz-background-size", "cover");
  $(container).css("-o-background-size", "cover");
}