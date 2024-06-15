let whatsapp = document.querySelector('.cta-whatsapp');

function toggleWhatsapp() {
  if (whatsapp) {
    window.scrollY > 100 ? whatsapp.classList.add('active') : whatsapp.classList.remove('active');
  }
}

document.addEventListener('scroll', toggleWhatsapp);

let phone = document.querySelector('.cta-phone');

function togglePhone() {
  if (phone) {
    window.scrollY > 100 ? phone.classList.add('active') : phone.classList.remove('active');
  }
}

document.addEventListener('scroll', togglePhone);



// * Testimonials slider
// */
new Swiper('.testimonials-slider', {
 speed: 600,
 loop: true,
 autoplay: {
   delay: 5000,
   disableOnInteraction: false
 },
 slidesPerView: 'auto',
 pagination: {
   el: '.swiper-pagination',
   type: 'bullets',
   clickable: true
 },
 breakpoints: {
   320: {
     slidesPerView: 1,
     spaceBetween: 40
   },

   1200: {
     slidesPerView: 3,
     spaceBetween: 40
   }
 }
});