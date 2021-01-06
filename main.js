let map;

function initMap() {
  const loc = { lat: 39.584265433518915, lng: -74.31066565197669 }

  const map = new google.maps.Map(document.getElementById("map"), {
    center: loc,
    zoom: 6,
  });

  const marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}

$('#main-header a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 800);
  }
});
