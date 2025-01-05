$(document).ready(function() {
    $('.dropbtn').click(function() {
      $('.dropdown-content').toggleClass('show');
    });
  
    $(document).click(function(event) {
      if (!$(event.target).closest('.dropdown').length) {
        $('.dropdown-content').removeClass('show');
      }
    });
  });
  




  function myFunction() {
    var x = document.getElementById("centered_nav");
    if (x.className === "rc_nav") {
        x.className += " responsive";
    } else {
        x.className = "rc_nav";
    }
}