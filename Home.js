




document.addEventListener("DOMContentLoaded", function() {
  const fadeMain = document.querySelector(".main");

  fadeMain.style.transition = "opacity 1s, transform 1s";
  fadeMain.style.opacity = 1;
  fadeMain.style.transform = "translateY(0)";
});








const circle = document.querySelector('.circle');
const circleRadius = 25; // Half of the circle's width/height

let isFollowing = false;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    if (!isFollowing) {
        isFollowing = true;
        currentX = e.clientX;
        currentY = e.clientY;
        followCursor();
    } else {
        currentX = e.clientX;
        currentY = e.clientY;
    }
});

function followCursor() {
    const targetX = currentX - circleRadius + window.pageXOffset;
    const targetY = currentY - circleRadius + window.pageYOffset;

    const deltaX = targetX - parseFloat(circle.style.left || 0);
    const deltaY = targetY - parseFloat(circle.style.top || 0);

    const easeAmount = 0.15; // Adjust for desired ease amount

    circle.style.left = parseFloat(circle.style.left || 0) + deltaX * easeAmount + 'px';
    circle.style.top = parseFloat(circle.style.top || 0) + deltaY * easeAmount + 'px';

    if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
        requestAnimationFrame(followCursor);
    } else {
        isFollowing = false;
    }
}









const marqueeContent = document.querySelector('.marquee-content');

// Clone and append the marquee items to create a continuous loop
const marqueeItems = document.querySelectorAll('.marquee-item');
marqueeItems.forEach((item) => {
  const clone = item.cloneNode(true);
  marqueeContent.appendChild(clone);
});

// Calculate the total width of the marquee content
const marqueeContentWidth = marqueeItems.length * marqueeItems[0].offsetWidth;

// Set the width of the marquee content to enable scrolling
marqueeContent.style.width = marqueeContentWidth + 'px';



// navigation
$('.nav li:has(ul)')
  .addClass('has-subnav')
  .each(function(){
    var $li = $(this)
    , $a = $('> a', $li);

    $a.on('mouseenter', function(){
      $li.addClass('active');
    });
    $li.on('mouseleave', function(){
      $li.removeClass('active');
    });
  });


  var thumbTitle = $(".thumb-title");
  for (var i = 0; i<= thumbTitle.length; i++){
      if(thumbTitle[i].innerHTML.length > 50){
          var shortendTitle =thumbTitle[i].innerHTML.slice(0, 50);
          thumbTitle[i].innerHTML = shortendTitle.concat("...");
      }
  }

