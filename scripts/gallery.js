const images = [
  {
    preview: 'https://picsum.photos/seed/picsum/150/150',
    original: 'https://picsum.photos/seed/picsum/800/600',
    description: 'Тестове зображення 1',
  },
  {
    preview: 'https://picsum.photos/seed/lul/150/150',
    original: 'https://picsum.photos/seed/lul/800/600',
    description: 'Тестове зображення 2',
  },
  {
    preview: 'https://picsum.photos/seed/123/150/150',
    original: 'https://picsum.photos/seed/123/800/600',
    description: 'Тестове зображення 3',
  },
  {
    preview: 'https://picsum.photos/seed/321/150/150',
    original: 'https://picsum.photos/seed/321/800/600',
    description: 'Тестове зображення 4',
  },

  {
    preview: 'https://picsum.photos/seed/222/150/150',
    original: 'https://picsum.photos/seed/222/800/600',
    description: 'Тестове зображення 5',
  },

  {
    preview: 'https://picsum.photos/seed/uwu/150/150',
    original: 'https://picsum.photos/seed/uwu/800/600',
    description: 'Тестове зображення 6',
  },

  {
    preview: 'https://picsum.photos/seed/cvc/150/150',
    original: 'https://picsum.photos/seed/cvc/800/600',
    description: 'Тестове зображення 7',
  },

  {
    preview: 'https://picsum.photos/seed/hhh/150/150',
    original: 'https://picsum.photos/seed/hhh/800/600',
    description: 'Тестове зображення 8',
  },

  {
    preview: 'https://picsum.photos/seed/xxx/150/150',
    original: 'https://picsum.photos/seed/xxx/800/600',
    description: 'Тестове зображення 9',
  },

  {
    preview: 'https://picsum.photos/seed/yyy/150/150',
    original: 'https://picsum.photos/seed/yyy/800/600',
    description: 'Тестове зображення 10',
  },
];

const galleryContainer = document.querySelector('ul.gallery');
const galleryMarkup = createGalleryMarkup(images);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryClick);

function createGalleryMarkup(images) {
  return images.map(({ preview, original, description }, index) => {
    return `
            <li>
                <img class="image" src="${preview}" data-source="${original}" data-index="${index}" alt="${description}" />
            </li>
        `;
  }).join('');
}

function onGalleryClick(event) {
  event.preventDefault();

  const isGalleryImage = event.target.classList.contains('image');

  if (!isGalleryImage) {
    return;
  }

  let currentIndex = Number(event.target.dataset.index);
  openLightbox(currentIndex);
}

function openLightbox(index) {
  console.log(images[index].original);
  const instance = basicLightbox.create(`
        <div class="modal">
            <img src="${images[index].original}" width="800" height="600">
        </div>
    `);

  instance.show();

  btnClose.addEventListener('click', () => instance.close());
  btnPrev.addEventListener('click', () => navigateLightbox(index - 1, instance));
  btnNext.addEventListener('click', () => navigateLightbox(index + 1, instance));
}

