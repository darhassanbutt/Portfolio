function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;

    // Set download link
    let downloadBtn = document.getElementById("download-btn");
    downloadBtn.href = img.src; // Set the href to the image source
    downloadBtn.download = "certificate.jpg"; // Default file name
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
