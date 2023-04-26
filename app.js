/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    const isOpen = document.querySelector('.menu').classList.contains('opened')
    console.log(isOpen)
    if(!isOpen) {
        document.getElementById("myNav").style.height = "0%";
    }
  }