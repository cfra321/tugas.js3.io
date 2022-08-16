var x = document.getElementById("lokasi");

function getlocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(tunjukanPosisi);
  } else {
    x.innerHTML = "Geolocation tidak mensupport browser anda";
  }
}

function tunjukanPosisi(position) {
  x.innerHTML = "Latitude :" + position.coords.latitude + "<br> Longitude :" + position.coords.longitude;
}
