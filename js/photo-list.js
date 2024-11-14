import {photosList} from './generate-photo-data.js';

import {
  isEscapeKey
} from './util.js';

const pictureModal = document.querySelector('.big-picture');
const pictureModalImg = pictureModal.querySelector('.big-picture__img img');
const pictureModalComments = pictureModal.querySelector('.social__comments');
const pictureModalComment = pictureModal.querySelector('.social__comment');
const pictureModalClose = pictureModal.querySelector('.big-picture__cancel');
const pictureModalLikesCount = pictureModal.querySelector('.likes-count');
const pictureModalCommentsCount = pictureModal.querySelector('.social__comment-shown-count');
const pictureModalCommentsTotal = pictureModal.querySelector('.social__comment-total-count');
const pictureModalDescription = pictureModal.querySelector('.social__caption');


const getPhotosList = () => {
  const photosContainer = document.querySelector('.pictures');
  const photoTemplate = document.querySelector('#picture').content;
  const photoItems = photosList();

  photoItems.forEach((photo) => {

    const photoElement = photoTemplate.cloneNode(true);
    const photoElementItem = photoElement.querySelector('.picture');

    // событие при нажатии на миниаюру
    photoElementItem.addEventListener('click', (evt) => {
      evt.preventDefault();
      openPictureModal();

      pictureModalImg.src = photo.url;
      pictureModalLikesCount.textContent = photo.likes;
      pictureModalCommentsTotal.textContent = photo.comments.length;
      pictureModalCommentsCount.textContent = photo.comments.length;
      pictureModalDescription.textContent = photo.description;

      photo.comments.forEach((comment) => {
        const userComment = pictureModalComment.cloneNode(true);

        const userCommentAvatar = userComment.querySelector('.social__picture');
        userCommentAvatar.src = comment.avatar;
        userCommentAvatar.alt = comment.name;

        const userCommentMessage = userComment.querySelector('.social__text');
        userCommentMessage.textContent = comment.message;

        pictureModalComments.appendChild(userComment);
      });

    });

    pictureModalClose.addEventListener('click', () => {
      closePictureModal();
    });

    function openPictureModal () {
      pictureModal.classList.remove('hidden');
      document.body.classList.add('modal-open');
      pictureModalComments.textContent = '';

      document.addEventListener('keydown', (evt) => {
        if (isEscapeKey(evt)) {
          evt.preventDefault();
          pictureModal.classList.add('hidden');
          document.body.classList.remove('modal-open');
        }
      });
    }

    function closePictureModal () {
      pictureModal.classList.add('hidden');
      document.body.classList.remove('modal-open');

      document.removeEventListener('keydown', (evt) => {
        if (isEscapeKey(evt)) {
          evt.preventDefault();
          pictureModal.classList.add('hidden');
          document.body.classList.remove('modal-open');
        }
      });
    }

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
