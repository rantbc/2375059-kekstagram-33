import {
  isEscapeKey
} from './utils.js';

const commentFragment = document.createDocumentFragment();
const pictureModalContainer = document.querySelector('.big-picture');
const pictureModalImgElement = pictureModalContainer.querySelector('.big-picture__img img');
const pictureModalDescriptionElement = pictureModalContainer.querySelector('.social__caption');
const commentsContainer = pictureModalContainer.querySelector('.social__comments');
const commentElement = pictureModalContainer.querySelector('.social__comment');
const pictureModalLikesCountElement = pictureModalContainer.querySelector('.likes-count');
const pictureModalCommentsCountElement = pictureModalContainer.querySelector('.social__comment-shown-count');
const pictureModalCommentsTotalElement = pictureModalContainer.querySelector('.social__comment-total-count');
const pictureModalCommentsLoader = pictureModalContainer.querySelector('.social__comments-loader');
const pictureModalCloseElement = pictureModalContainer.querySelector('.big-picture__cancel');


const COMMENTS_STEP = 5;
let currentCommentsList = [];
let commentsCount = COMMENTS_STEP;


const createBigPictureComments = (comment) => {
  const userComment = commentElement.cloneNode(true);
  const userCommentAvatarElement = userComment.querySelector('.social__picture');
  userCommentAvatarElement.src = comment.avatar;
  userCommentAvatarElement.alt = comment.name;
  const userCommentMessageElement = userComment.querySelector('.social__text');
  userCommentMessageElement.textContent = comment.message;
  commentFragment.appendChild(userComment);
};


const renderBigPictureComments = () => {
  commentsContainer.querySelectorAll('.social__comment').forEach((i) => i.remove());
  if (commentsCount > currentCommentsList.length) {
    commentsCount = currentCommentsList.length;
  }
  if (currentCommentsList.length <= COMMENTS_STEP || commentsCount >= currentCommentsList.length) {
    pictureModalCommentsLoader.classList.add('hidden');
  } else {
    pictureModalCommentsLoader.classList.remove('hidden');
  }
  pictureModalCommentsCountElement.textContent = commentsCount;
  const loadedCommentsList = currentCommentsList.slice(0, commentsCount);
  for (let i = 0; i < loadedCommentsList.length; i++) {
    createBigPictureComments(loadedCommentsList[i]);
  }
  commentsContainer.appendChild(commentFragment);
};


const renderBigPicture = (photo) => {
  pictureModalImgElement.src = photo.url;
  pictureModalImgElement.alt = photo.description;
  pictureModalDescriptionElement.textContent = photo.description;
  pictureModalLikesCountElement.textContent = photo.likes;
  pictureModalCommentsTotalElement.textContent = photo.comments.length;
  pictureModalCommentsCountElement.textContent = photo.comments.length;
  currentCommentsList = photo.comments.slice();
  renderBigPictureComments();
};


const loadMoreComments = () => {
  commentsCount += COMMENTS_STEP;
  renderBigPictureComments();
};

pictureModalCommentsLoader.addEventListener('click', () => {
  loadMoreComments();
});


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    pictureModalContainer.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const openPictureModal = () => {
  pictureModalContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentsContainer.textContent = '';
  document.addEventListener('keydown', onDocumentKeydown);
};


/* ----- */

const openBigPicture = (photo) => {
  openPictureModal();
  renderBigPicture(photo);
  commentsCount = COMMENTS_STEP;

  // console.log(photo);
};

/* ----- */


const closePictureModal = () => {
  pictureModalContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  pictureModalCommentsLoader.removeEventListener('click', () => {
    loadMoreComments();
  });
};

pictureModalCloseElement.addEventListener('click', () => {
  closePictureModal();
});


export {
  openBigPicture
};
