import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

function renderList(images) {
  const markup = images
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery_item">
      <a class="gallery_link" href="${original}">
      <img class="gallery_image" src="${preview}" alt="${description}">
      </a>
      </li>`;
    })
    .join("");

  list.innerHTML = markup;
}

renderList(galleryItems);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
