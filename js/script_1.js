document.addEventListener('DOMContentLoaded', function() {

  // Добавляем метки к activate и success
  // var url = location.href;
  // if ( url.indexOf('?') != -1 ) {
  //   let tail = url.substring(url.indexOf('?'));
  //   tail = tail.replace(/&/gi,'%26');
  //   tail = tail.replace('#popup','');
  //   $('.activate').val($('.activate').val() +tail);
  //   $('.success').val($('.success').val() +tail);       
  // }


  // Отправялем форму

  $('form').on('submit', function (e) {

    e.preventDefault();

    var doneurl2 = $(this).find('[name="doneurl2"]').val();
    var email = $(this).find('[name="lead_email"]').val();

    if ( doneurl2.indexOf('?') === -1 ) {
      $('[name="doneurl2"]').val(doneurl2 + '?reg_email=' + email)
    } else {
      $('[name="doneurl2"]').val(doneurl2 + '&reg_email=' + email)
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'formSent1509'
      });
    }

    e.currentTarget.submit();
    
  });


  // exit popup
  var show = true;
  var windowWidth = $(window).width();

  setTimeout(function() {
    $(document).on('mouseleave', function(e) {
      if ((e.clientY < 10) && (show == true) && ( windowWidth > 720) ) { 
        $.fancybox.open({
          src  : '#exit-popup',
          type : 'inline',
          smallBtn : false,
          toolbar: false
        });      
        show = false;
      }    
    });  
  }, 5000);

  if ( windowWidth<=720 ) {
    setTimeout(function() {
      $.fancybox.open({
        src  : '#exit-popup',
        type : 'inline',
        smallBtn : false,
        toolbar: false
      });  
    }, 55000);
  }
  // exit popup

  $('.reviews-block').owlCarousel({
    margin: 10,
    items: 1,
    nav: true, 
    loop: true,
    navText: ["<img src='images/reviews/arrowleft.png' alt=''>", "<img src='images/reviews/arrowright.png' alt=''>"],
  });
}); // end DOMContentLoaded


$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  var target = this.hash,
      $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
    window.location.hash = target;
  });
});