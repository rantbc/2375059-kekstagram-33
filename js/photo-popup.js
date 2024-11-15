import {
  isEscapeKey
} from './utils.js';


const pictureModalElement = document.querySelector('.big-picture');
const pictureModalImgElement = pictureModalElement.querySelector('.big-picture__img img');
const pictureModalCommentsElement = pictureModalElement.querySelector('.social__comments');
const pictureModalCommentElement = pictureModalElement.querySelector('.social__comment');
const pictureModalCloseElement = pictureModalElement.querySelector('.big-picture__cancel');
const pictureModalLikesCountElement = pictureModalElement.querySelector('.likes-count');
const pictureModalCommentsCountElement = pictureModalElement.querySelector('.social__comment-shown-count');
const pictureModalCommentsTotalElement = pictureModalElement.querySelector('.social__comment-total-count');
const pictureModalDescriptionElement = pictureModalElement.querySelector('.social__caption');


const renderBigPictureComments = (comments) => {
  comments.forEach(
    (comment) => {

      const userComment = pictureModalCommentElement.cloneNode(true);

      const userCommentAvatarElement = userComment.querySelector('.social__picture');
      userCommentAvatarElement.src = comment.avatar;
      userCommentAvatarElement.alt = comment.name;

      const userCommentMessageElement = userComment.querySelector('.social__text');
      userCommentMessageElement.textContent = comment.message;

      pictureModalCommentsElement.appendChild(userComment);

    });
};


const renderBigPicture = (photo) => {
  pictureModalImgElement.src = photo.url;
  pictureModalLikesCountElement.textContent = photo.likes;
  pictureModalCommentsTotalElement.textContent = photo.comments.length;
  pictureModalCommentsCountElement.textContent = photo.comments.length;
  pictureModalDescriptionElement.textContent = photo.description;

  renderBigPictureComments(photo.comments);
};


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    pictureModalElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const openPictureModal = () => {
  pictureModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  pictureModalCommentsElement.textContent = '';
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePictureModal = () => {
  pictureModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};


pictureModalCloseElement.addEventListener('click', () => {
  closePictureModal();
});


const openBigPicture = (photo) => {
  openPictureModal();
  renderBigPicture(photo);
};


export {
  openBigPicture
};
