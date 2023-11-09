import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listImages = document.querySelector(".gallery");

console.log(listImages);

const imagesMarkup = createImagesListMarkup(galleryItems);

listImages.insertAdjacentHTML("beforeend", imagesMarkup);

listImages.addEventListener("clik", onCardsContainerClik);

function createImagesListMarkup(images) {
  return images
    .map(({ original, preview, description }) => {
      return `<li class="gallery_item">
         <a class="gallery_link" href="${original}">
         <img
         class="gallery_image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
         />
         </a>
         </li>`;
    })
    .join("");
}
