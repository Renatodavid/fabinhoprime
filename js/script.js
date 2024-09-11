/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*========== sticky navbar ==========*/
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true, // do not remove this
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

/*========== scroll reveal ==========*/
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form ",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});



window.onload = function() {
  // Função para carregar os vídeos
  function loadVideos() {
      const videos = document.querySelectorAll('.video');
      videos.forEach(video => {
          video.load();
      });
  }

  // Chamando a função para carregar os vídeos quando a página carregar
  loadVideos();
};
 // Adicionando funcionalidade ao botão de play
 
 const playButtons = document.querySelectorAll('.play-button');
 playButtons.forEach(button => {
     button.addEventListener('click', function() {
         const video = this.parentElement.querySelector('.video');
         if (video.paused) {
             video.play();
             this.textContent = 'Pause';
         } else {
             video.pause();
             this.textContent = 'Play';
         }
     });
 });

 // Chamando a função para carregar os vídeos quando a página carregar
 loadVideos();  
 window.onload = function() {
  // Função para exibir o vídeo quando o botão é clicado
  function showVideo(event) {
      const button = event.target;
      const videoSrc = button.getAttribute('data-src');
      const videoWrapper = button.parentElement;

      // Cria um elemento de vídeo e adiciona ao wrapper
      const video = document.createElement('video');
      video.src = videoSrc;
      video.controls = true;
      video.classList.add('video');
      videoWrapper.appendChild(video);

      // Remove o botão após exibir o vídeo
      button.remove();
  }

  // Adiciona um ouvinte de evento para cada botão
  const buttons = document.querySelectorAll('.play-button');
  buttons.forEach(button => {
      button.addEventListener('click', showVideo);
  });
};
const carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  carousel.classList.add('active');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3; // Ajuste a velocidade de rolagem
  carousel.scrollLeft = scrollLeft - walk;
});


document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video");

  videos.forEach(video => {
    video.addEventListener("play", function () {
      videos.forEach(v => v.classList.remove("playing"));
      this.classList.add("playing");
    });

    video.addEventListener("pause", function () {
      this.classList.remove("playing");
    });

    video.addEventListener("ended", function () {
      this.classList.remove("playing");
    });
  });
});
