function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
const h1 = document.querySelector('h1');
var delaytitle = getRndInteger(100, 2000);
const interval = setInterval(function() {
  setTimeout(function() {
    h1.innerHTML = "Tamwyn's Portfolio";
    setTimeout(function() {
      h1.innerHTML = ".amwyn's Portfolio";
      setTimeout(function() {
        h1.innerHTML = "T.mwyn's Portfolio";
        setTimeout(function() {
          h1.innerHTML = "Ta.wyn's Portfolio";
          setTimeout(function() {
            h1.innerHTML = "Tam.wn's Portfolio";
            setTimeout(function() {
              h1.innerHTML = "Tamw.n's Portfolio";
              setTimeout(function() {
                h1.innerHTML = "Tamwy.'s Portfolio";
                setTimeout(function() {
                  h1.innerHTML = "Tamwyn.'s Portfolio";
                  setTimeout(function() {
                    h1.innerHTML = "Tamwyn's Portfolio";
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
    }, 100);
  }, 100);
  
}, 4500);
delaytitle = getRndInteger(100, 2000);
}, delaytitle);
console.log(h1);



const btn = document.querySelector('.button-theme');
// Listen for a click on the button
btn.addEventListener('click', function() {
    // Check if the body has the light-theme class
    if (document.body.classList.contains("light-theme")) {
        // Add the dark-theme class and remove the light-theme class after the transition
        document.body.classList.add("dark-theme");
        console.log('->to dark');
        setTimeout(function () {
          btn.innerHTML  = "LIGHT";
        }, 150);
    
        setTimeout(function() {
            document.body.classList.remove("light-theme");
            console.log('dark');
        }, 500);
    } else {
        // Add the light-theme class and remove the dark-theme class after the transition
        document.body.classList.add("light-theme");
        console.log('->to light');

        document.body.classList.remove("dark-theme");
        console.log('light');
        setTimeout(function () {
          btn.innerHTML  = "DARK";
      }, 150);
    }
});