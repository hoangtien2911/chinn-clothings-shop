// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass('active-filter-btn');
  });
}


// Login register
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const registerForm = document.querySelector("#register");
  document.querySelector("#buttonRegister").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("form-hidden");
    registerForm.classList.remove("form-hidden");
  });

  document.querySelector("#buttonLogin").addEventListener("click", e => {    
    e.preventDefault();
    loginForm.classList.remove("form-hidden");
    registerForm.classList.add("form-hidden");
  });
});


