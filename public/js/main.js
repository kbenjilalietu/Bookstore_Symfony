const chercher = (e) => {
  const motCle = document.getElementById("motCle");
  e.preventDefault();
  window.location.replace(`/livre/chercher/${motCle.value}`);
};

const list = (e) => {
  const dateMin = document.getElementById("dateMin");
  const dateMax = document.getElementById("dateMax");
  e.preventDefault();
  window.location.replace(
    `/livre/liste-entre-deux-dates/${dateMin.value}/${dateMax.value}`
  );
};

const livres = document.getElementById("livres");
const noteAlert = document.getElementById("note-range-alert");

if (livres) {
  livres.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-id");
    const livreNote = document.getElementById(`livre-note-${id}`);
    if (e.target.className === "btn btn-primary augmenter") {
      fetch(`/livre/augmenter/${id}`, {})
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          livreNote.innerHTML = data.note;
          if (!data.success) {
            noteAlert.style.display = "block";
            setTimeout(() => {
              noteAlert.style.display = "none";
            }, 3000);
          }
        });
    }
    if (e.target.className === "btn btn-primary diminuer") {
      fetch(`/livre/diminuer/${id}`, {})
        .then((res) => res.json())
        .then((data) => {
          livreNote.innerHTML = data.note;
          if (!data.success) {
            noteAlert.style.display = "block";
            setTimeout(() => {
              noteAlert.style.display = "none";
            }, 3000);
          }
        });
    }
  });
}

const filtrerParNote = (e) => {
  window.location.replace(`/livre/liste-par-note/${e.target.value}`);
};
const filtrerParDate = (e) => {
  let date = new Date(e.target.value).toISOString().slice(0, 10);
  window.location.replace(`/livre/liste-par-date/${date}`);
};
const filtrerParAuteur = (e) => {
  console.log(e.target.value);
  window.location.replace(`/livre/liste-par-auteur/${e.target.value}`);
};
const filtrerParGenre = (e) => {
  console.log(e.target.value);
  window.location.replace(`/livre/liste-par-genre/${e.target.value}`);
};

// ---------Responsive-navbar-active-animation-----------
function test(){
  var tabsNewAnim = $('#navbarSupportedContent');
  var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
  var activeItemNewAnim = tabsNewAnim.find('.active');
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    "top":itemPosNewAnimTop.top + "px",
    "left":itemPosNewAnimLeft.left + "px",
    "height": activeWidthNewAnimHeight + "px",
    "width": activeWidthNewAnimWidth + "px"
  });
  $("#navbarSupportedContent").on("click","li",function(e){
    $('#navbarSupportedContent ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px",
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
  });
}
$(document).ready(function(){
  setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
  setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if ( path == '' ) {
    path = 'index.html';
  }

  var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
  // Add active class to target link
  target.parent().addClass('active');
});