

    const moonImg = document.getElementById('moon-img');
    const body = document.body;

    moonImg.addEventListener('click', () => {
        // Toggle between moon and sun images
        if (moonImg.src.includes('lua')) {
            moonImg.src = '/html, css, assets/assets/sol.png'; // Path to your sun image
        } else {
            moonImg.src = '/html, css, assets/assets/lua.png'; // Path to your moon image
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


