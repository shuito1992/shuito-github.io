function activeGallery() {
  // alert("Hello from the gallery file!");
  let thumbnails  = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage   = document.querySelector("#gallery-photo > img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      // Set clicked image title as main image alt.
      let newTitle    = thumbnail.dataset.title;
      mainImage.setAttribute("alt", newTitle);

      // Change 'current' image.
      let currentClass = "current";
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Set description and title of the clicked image.
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");
      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}