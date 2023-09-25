import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("ul.gallery");

const markup = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
      />
    </a>
  </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", clickHandler);

function clickHandler(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeBtnListener);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", closeBtnListener);
      },
    }
  );
  instance.show();
  function closeBtnListener(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
