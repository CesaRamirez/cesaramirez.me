$(function () {
  $('#_title').typed({
    strings: ['César Ramírez'],
    showCursor: false,
    typeSpeed: 75
  });
  $('#typed-title').typed({
    strings: ['Desarrollador Web'],
    showCursor: true,
    loop: true,
    typeSpeed: 100
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('.loader').fadeOut('slow');
});
