var prevScrollPos = window.pageYOffset;

var navbar = document.querySelector('.navbar');



window.addEventListener('scroll', function() {

  var currentScrollPos = window.pageYOffset;



  if (prevScrollPos > currentScrollPos) {

    navbar.classList.add('visible');

  } else {

    navbar.classList.remove('visible');

  }



  prevScrollPos = currentScrollPos;

});



// Mendapatkan elemen dengan ID "tombolBaca" dan "pesan"

var tombolBaca = document.getElementById("tombolBaca");

var pesanElemen = document.getElementById("pesan");



// Menambahkan event listener saat tombol "Baca" diklik

tombolBaca.addEventListener("click", function() {

  // Mengubah visibilitas pesan menjadi terlihat

  pesanElemen.style.display = "block";

});

