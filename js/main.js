var images = new Array();
images.push("img/background.jpg");
images.push("img/others/hopium.jpg");
images.push("img/others/bugatti.jpg");

var pointeur = 0;

function ChangerImage() {
  document.getElementById("imagefond").src = images[pointeur];

  if (pointeur < images.length - 1) {
    pointeur++;
  } else {
    pointeur = 0;
  }

  window.setTimeout("ChangerImage()", 15000);
}

window.onload = function () {
  ChangerImage();
};
