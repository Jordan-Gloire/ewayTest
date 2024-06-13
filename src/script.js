// window.addEventListener('scroll',()=>{
//     const header = document.querySelector('nav');
//     if (window.scrollY > 50) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }    
// })

// window.onscroll = function() {scrollFunction()};



function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Ajout de l'option smooth pour un défilement en douceur
  });
}
$('#menu-toggle').on('click', function() {
  $('#menu').fadeToggle('hidden');
});


function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector('.back-to-top').style.display = "block";
        } else {
            document.querySelector('.back-to-top').style.display = "none";
        }
    }