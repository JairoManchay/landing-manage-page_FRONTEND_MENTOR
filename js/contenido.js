 

var swiper = new Swiper(".testimonial__js__slider", {

    grabCursor: true,
    spaceBetween:10,
    slidesPerView: 2,
    // Optional parameters
  direction: 'horizontal',
  loop: true,
  brackpoints:{
    600:{
      slidePerView: 1
    }
  },

  // If we need pagination
  pagination: {
    el: '.testimonial__pagination__js',
    clickable: true,
  },
  autoplay: {
    delay: 5000
   }
})


// funcionamiento de la hamburguesa
const toggle = document.getElementById("toggle");
const navegacion = document.getElementById("nav");
const cierre = document.getElementById("cierre");

var cambioImg = 0;

toggle.addEventListener("click", ()=>{
  toggle.classList.toggle("close");
  navegacion.classList.toggle("show");

  cambioImg = cambioImg + 1;
  if (cambioImg % 2 != 0) {
    toggle.setAttribute("src", "./images/icon-close.svg");
    toggle.style.position="fixed";
    toggle.style.top="6%";
    toggle.style.right="6%";
    document.getElementById("btn_started").setAttribute("disabled", "true")
  }else{
    toggle.style.position="absolute";
    toggle.style.top="6%";
    toggle.style.right="6%";
    toggle.setAttribute("src", "./images/icon-hamburger.svg");
    document.getElementById("btn_started").setAttribute("disabled", "false")
  }
})


/* Funcionalidad para el button */
const inputCorreo = document.getElementById("texto");
const button = document.getElementById("button__go");
const mensajeError = document.getElementById("mensaje__error");
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


button.addEventListener('click', e=>{
  e.preventDefault();
  validateInput();
})


function validateInput(){
  console.log("validar")
  const validar = inputCorreo.value.trim()

  if(validar===''){
    inputCorreo.focus();
    inputCorreo.style.borderColor='hsl(12, 88%, 59%)';
    mensajeError.style.display='none';
  }else if(validar !=='' && emailRegex.test(validar)){
      inputCorreo.value='';
      inputCorreo.style.borderColor='hsl(223, 100%, 88%)';
      alert("la información será enviada al correo")
      mensajeError.style.display='none';
  }else{
      mensajeError.innerHTML = "Please provide a valid email address";
      mensajeError.style.display='block';
      inputCorreo.style.borderColor='red';
  }
}