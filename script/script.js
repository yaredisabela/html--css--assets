
const slides = document.querySelectorAll('.slide');
    const paginationDots = document.querySelectorAll('.pagination .dot');
    const prevArrow = document.querySelector('.arrow.prev');
    const nextArrow = document.querySelector('.arrow.next');

    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.classList.remove('prev');
            slide.classList.remove('next');
        });

        paginationDots.forEach(dot => {
            dot.classList.remove('active');
        });

        if (n < 0) {
            n = slides.length - 1;
        } else if (n >= slides.length) {
            n = 0;
        }

        currentSlide = n;

        slides[currentSlide].classList.add('active');

        if (currentSlide - 1 >= 0) {
            slides[currentSlide - 1].classList.add('prev');
        }

        if (currentSlide + 1 < slides.length) {
            slides[currentSlide + 1].classList.add('next');
        }

        paginationDots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    prevArrow.addEventListener('click', prevSlide);
    nextArrow.addEventListener('click', nextSlide);

    setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos

    const moonImg = document.getElementById('moon-img');
    const body = document.body;

    moonImg.addEventListener('click', () => {
        // Toggle between moon and sun images
        if (moonImg.src.includes('lua')) {
            moonImg.src = '/assets/sol.png'; // Path to your sun image
        } else {
            moonImg.src = '/assets/lua.png'; // Path to your moon image
        }

        // Toggle between light and dark mode
        body.classList.toggle('dark-mode');
    });

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }


