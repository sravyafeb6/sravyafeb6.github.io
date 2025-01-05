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




// DROP DOWN MENU //

function toggleDropdown() {
  var dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('open');
}

document.addEventListener('click', function(event) {
  var dropdown = document.querySelector('.dropdown');
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('open');
  }
});



// TEXT CAROUSEL //

// Get the icon elements
const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
const icon3 = document.getElementById('icon3');
const icon4 = document.getElementById('icon4');

// Add event listener for hover on the parent containers
document.querySelector('.in').addEventListener('mouseenter', () => {
  icon1.classList.add('hide');
  icon2.classList.remove('hide');
});

document.querySelector('.in').addEventListener('mouseleave', () => {
  icon1.classList.remove('hide');
  icon2.classList.add('hide');
});

document.querySelector('.inn').addEventListener('mouseenter', () => {
  icon3.classList.add('hide');
  icon4.classList.remove('hide');
});

document.querySelector('.inn').addEventListener('mouseleave', () => {
  icon3.classList.remove('hide');
  icon4.classList.add('hide');
});


function showDescription(index) {
  var descriptions = document.querySelectorAll(".description");
  var headings = document.querySelectorAll(".heading-column > div");

  for (var i = 0; i < descriptions.length; i++) {
    descriptions[i].classList.remove("active");
    headings[i].classList.remove("active");
  }

  descriptions[index].classList.add("active");
  headings[index].classList.add("active");
}


// MOBILE FEATURE RESIZING //

let isLargeScreen = false;

function checkScreenSize() {
  if (window.innerWidth > 767 && !isLargeScreen) {
    isLargeScreen = true; // Set the flag to prevent multiple executions

    // Your existing code for larger screen sizes here
    const imagePanel = document.querySelector('.image-panel');
    const firstImageContainer = document.querySelector('.image-container:first-child');
    const imageContainers = document.querySelectorAll('.image-container');
    const lastImageContainer = imageContainers[imageContainers.length - 1];

    // Add your event listeners and other functionality here
    firstImageContainer.addEventListener('mouseenter', () => {
      imagePanel.style.transform = 'translateX(10%)';
    });

    firstImageContainer.addEventListener('mouseleave', () => {
      imagePanel.style.transform = 'translateX(0)';
    });

    lastImageContainer.addEventListener('mouseenter', () => {
      imagePanel.style.transform = 'translateX(-10%)';
    });

    lastImageContainer.addEventListener('mouseleave', () => {
      imagePanel.style.transform = 'translateX(0)';
    });

    $(document).ready(function() {
      // Your existing code here
    });






    const imagePanel2 = document.querySelector('.image-panel2');
    const firstImageContainer2 = document.querySelector('.image-container2:first-child');
    const imageContainers2 = document.querySelectorAll('.image-container2');
    const lastImageContainer2 = imageContainers2[imageContainers2.length - 1];

    // Add your event listeners and other functionality here
    firstImageContainer2.addEventListener('mouseenter', () => {
      imagePanel2.style.transform = 'translateX(9%)';
    });

    firstImageContainer2.addEventListener('mouseleave', () => {
      imagePanel2.style.transform = 'translateX(0)';
    });

    lastImageContainer2.addEventListener('mouseenter', () => {
      imagePanel2.style.transform = 'translateX(-10%)';
    });

    lastImageContainer2.addEventListener('mouseleave', () => {
      imagePanel2.style.transform = 'translateX(0)';
    });
  } else if (window.innerWidth <= 767) {
    isLargeScreen = false; // Reset the flag when the screen size becomes smaller than 768px
  }
}

// Initial check when the page loads
checkScreenSize();

// Check on window resize
window.addEventListener('resize', checkScreenSize);




