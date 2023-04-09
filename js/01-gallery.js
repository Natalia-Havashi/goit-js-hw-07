import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', onImgClick);


function createGalleryItemsMarkup(items) {  `   `
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}
  
  function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG'){
        return;
    } 
  
  const instante = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width ="800" height="600">`,
    {
        onShow:(instance) => {
          function onEscapePress(event){
            if (event.code === "Escape"){
                instance.close();
            }
          }
            window.addEventListener("keydown", onEscapePress);
        },
        onClose: (instance) => {
          function onEscapePress(event){
            if (event.code === "Escape"){
                instance.close();
            }
          }
            window.removeEventListener("keydown", onEscapePress);
        },
    }
  );
   instante.show()
  };

  
  