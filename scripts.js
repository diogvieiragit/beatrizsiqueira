const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));




let currentImageIndex = 0;
let images = [];

document.addEventListener("DOMContentLoaded", function () {
    images = document.querySelectorAll(".imgGaleria");

    window.openModal = function (img) {
        if (window.innerWidth < 768) return; 

        currentImageIndex = Array.from(images).indexOf(img);
        updateModalImage();

        var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
        myModal.show();
    };

    window.closeModal = function () {
        var myModalEl = document.getElementById("imageModal");
        var modalInstance = bootstrap.Modal.getInstance(myModalEl);
        if (modalInstance) {
            modalInstance.hide();
        }
    };

    window.nextImage = function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateModalImage();
    };

    window.prevImage = function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateModalImage();
    };

    function updateModalImage() {
        document.getElementById("modalImage").src = images[currentImageIndex].src;
    }

    
    document.getElementById("imageModal").addEventListener("click", function (event) {
        if (!event.target.closest(".modal-body") &&
            !event.target.closest(".nav-btn") &&
            !event.target.closest(".close-btn")) {
            closeModal();
        }
    });
});

  
  


