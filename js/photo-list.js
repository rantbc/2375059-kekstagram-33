import {photosList} from './generate-photo-data.js';

const getPhotosList = () => {
  const photosContainer = document.querySelector('.pictures');
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const photoItems = photosList();

  photoItems.forEach((photo) => {
    const photoElement = photoTemplate.cloneNode(true);
    const photoElementImg = photoElement.querySelector('.picture__img');
    photoElementImg.src = photo.url;
    photoElementImg.alt = photo.description;

    const photoElementLikes = photoElement.querySelector('.picture__likes');
    photoElementLikes.textContent = photo.likes;

    const photoElementComments = photoElement.querySelector('.picture__comments');
    photoElementComments.textContent = photo.comments.length;

    photosContainer.appendChild(photoElement);
  });
};

export {
  getPhotosList
};
