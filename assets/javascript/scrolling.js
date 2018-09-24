$(window).scroll(function() {
  // selectors
  var $window = $(window),
    $body = $('body'),
    $panel = $('.colorBkgd');
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + $window.height() / 3;
  $panel.each(function() {
    var $this = $(this);
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      // Remove all classes on body with color-
      $body.removeClass(function(index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });
}).scroll();

var sections = $('section'),
  nav = $('nav'),
  nav_height = nav.outerHeight();
$(window).on('scroll', function() {
  var cur_pos = $(this).scrollTop();
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      $(this).addClass('active');
      nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
    }

  });
});
nav.find('a').on('click', function() {
  var $el = $(this),
    id = $el.attr('href');
  $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    },
    400);
  return false;
});
