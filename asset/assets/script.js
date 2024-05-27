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

const imgContainer = document.querySelector(".image-container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

let angle = 0;
let timeout;

prev.addEventListener("click", () => {
  angle += 45;
  clearTimeout(timeout);
  updateGallery();
});

next.addEventListener("click", () => {
  angle -= 45;
  clearTimeout(timeout);
  updateGallery();
});

function updateGallery() {
  imgContainer.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
  timeout = setTimeout(() => {
    angle -= 45;
    updateGallery();
  }, 4000);
}
updateGallery();

const images = document.querySelectorAll(".image-container img");
images.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    currentIndex = index;
    modal.style.display = "block";
    modalImg.src = e.target.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

const prevModal = document.getElementById("prevModal");
const nextModal = document.getElementById("nextModal");

let currentIndex = 0;

prevModal.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
});

nextModal.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
});





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

