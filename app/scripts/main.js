$(function () {
  $('#_title').typed({
    strings: ['César Ramírez'],
    showCursor: false,
    typeSpeed: 75
  });
  $('#typed-title').typed({
    strings: ['Web Developer'],
    showCursor: true,
    loop: false,
    typeSpeed: 100
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('.loader').fadeOut('slow');
});
