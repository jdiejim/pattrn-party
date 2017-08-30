$('.accordion').on('click', function(e) {
  if (window.innerWidth > 450) {
    $('.accordion-card').removeClass('active');
    return $(e.target).parent().addClass('active');
  }

  $(e.target).parent().toggleClass('active');
})
