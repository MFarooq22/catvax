$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $(".fixed-top").css("background", "black");
      $(".nav li .btn-launch").css("color", "white");
    } else {
      $(".fixed-top").css("background", "transparent");
      $(".fixed-top").css("padding-top", "14px");
      $(".fixed-top").css("padding-bottom", "14px");
      $(".nav li .btn-launch").css("color", "white");
    }
  });
});
AOS.init();
const switchLang = async () => {
  await loadLang('en');
  $('.changeLangcn').on('click', async (e) => {
    console.log(e)
    await loadLang('cn');
  });
  $('.changeLangen').on('click', async () => {
    await loadLang('en');
  })
}
window.addEventListener('load', async () => {
  await switchLang();
})

//   copy wallet address 
function copyAddress() {
  const address = document.querySelector('.donation-address span').innerText;
  navigator.clipboard.writeText(address);
  Toastify({
    text: "Wallet address copied to clipboard",
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "rgb(239, 204, 67)",
    stopOnFocus: true,
  }).showToast();
}



// menu toggle 
function toggleMenu() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger i');
  nav.classList.toggle('active');
  hamburger.classList.toggle('fa-bars');
  hamburger.classList.toggle('fa-times');
}


// gallery 
let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("mousemove", (e) => {
        let halfWidth = box.clientWidth / .5,
            halfHeight = box.clientHeight /.5,
            mouseX = e.pageX - box.offsetLeft,
            mouseY = e.pageY - box.offsetTop,
            maxDeg = 5, // Reduced maximum rotation to make it subtle
            maxOffset = 10; // Maximum offset for image movement

        let degX = ((mouseY - halfHeight) / halfHeight) * -maxDeg;
        let degY = ((mouseX - halfWidth) / halfWidth) * maxDeg;
        
        box.style.transform = `perspective(512px) rotateX(${degX}deg) rotateY(${degY}deg)`;

        box.querySelector("img").style.transform = `translate(${((mouseX - halfWidth) / halfWidth) * maxOffset}px, ${((mouseY - halfHeight) / halfHeight) * maxOffset}px)`;
    });

    box.addEventListener("mouseout", () => {
        box.style.transform = `perspective(512px) rotateX(0deg) rotateY(0deg)`;
        box.querySelector("img").style.transform = `translate(0, 0)`;
    });
});

