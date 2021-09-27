const images = document.getElementsByClassName('gif');

console.log(images);

images[0].addEventListener("mouseover", function(event) {
  event.target.src = "/assets/anxitools.gif";
});

images[0].addEventListener("mouseout", function(event) {
  event.target.src = "/assets/anxitools.jpg";
});

images[1].addEventListener("mouseover", function(event) {
  event.target.src = "/assets/fancymice.gif";
});

images[1].addEventListener("mouseout", function(event) {
  event.target.src = "/assets/fancymice.jpg";
});


images[2].addEventListener("mouseover", function(event) {
  event.target.src = "/assets/bridgewater.gif";
});

images[2].addEventListener("mouseout", function(event) {
  event.target.src = "/assets/bridgewater.jpg";
});
