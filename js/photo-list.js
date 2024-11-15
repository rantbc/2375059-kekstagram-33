import {photosList} from './generate-photo-data.js';
import {openBigPicture} from './photo-popup.js';


const getPhotosList = () => {
  const photosContainer = document.querySelector('.pictures'); // общий контейнер для миниатюр
  const photoTemplate = document.querySelector('#picture').content; // шаблон разметки миниатюры

  const photoItems = photosList(); // массив всех фото с комментариями

  photoItems.forEach( // пробегаемся по массиву с фотографиями
    (photo) => {

      const photoElement = photoTemplate.cloneNode(true); // копируем шаблон разметки миниатюры
      const photoElementItem = photoElement.querySelector('.picture'); // миниатюра

      photoElementItem.addEventListener('click', (evt) => { // событие при клике на миниатюру
        evt.preventDefault();

        openBigPicture(photo); // добавляем функцию открытия модалки
      });

      const photoImgElement = photoElement.querySelector('.picture__img');
      photoImgElement.src = photo.url;
      photoImgElement.alt = photo.description;

      const photoLikesElement = photoElement.querySelector('.picture__likes');
      photoLikesElement.textContent = photo.likes;

      const photoCommentsElement = photoElement.querySelector('.picture__comments');
      photoCommentsElement.textContent = photo.comments.length;

      photosContainer.appendChild(photoElement);

    });
};


export {
  getPhotosList
};
