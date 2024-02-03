function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = imageSrc;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
