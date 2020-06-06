const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });




  $('a[href^="#"]').click(function () {
      $('html, body').animate({
          scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
      }, 500);

      return false;
  });


  $(function() {
      var rotation = 0,
          scrollLoc = $(document).scrollTop();
      $(window).scroll(function() {
          var newLoc = $(document).scrollTop();
          var diff = scrollLoc - newLoc;
          rotation += diff, scrollLoc = newLoc;
          var rotationStr = "rotate(" + rotation + "deg)";
          $(".item:nth-child(even)").css({
              "-webkit-transform": rotationStr,
              "-moz-transform": rotationStr,
              "transform": rotationStr
          });
      });
  })
