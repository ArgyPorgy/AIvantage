

function fade(elem) {
    const fadeIn = document.querySelector(elem);
    fadeIn.style.opacity = "1";
    fadeIn.style.transition = "opacity 3s ease";
  }
  setTimeout(fade(".txt-to-fade"), 2000);


  const fadeElements = document.querySelectorAll(".product");

  fadeElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = 1;
      element.style.transition = "opacity 1s ease";
    }, (index + 1) * 300); // Delay each element by 1 second
  });



  function showcart() {
    const cart = document.querySelector(".sideBar");
    cart.style.left = "0";
  }
  function hidecart() {
    const cart = document.querySelector(".sideBar");
    cart.style.left = "-100%";
  }