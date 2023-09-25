import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("ul.gallery");

const markup = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
   </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox("ul.gallery .gallery__link", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
