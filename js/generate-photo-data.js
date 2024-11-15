import {
  getRandomInteger,
  getRandomArrayElement
} from './utils.js';

import './photo-popup.js';


import {
  PHOTOS_COUNT,
  likesCount,
  commentsCount,
  avatarCount,
  USER_NAMES,
  USER_MESSAGES,
  PHOTO_DESCRIPTION
} from './photo-data.js';


let photoId = 0;
let photoUrl = 0;
let commentId = 0;


// Объект комментариев
const userComments = () => {
  commentId ++;

  const userAvatar = getRandomInteger(avatarCount.MIN, avatarCount.MAX);

  return {
    id: commentId,
    avatar: `img/avatar-${userAvatar}.svg`,
    message: getRandomArrayElement(USER_MESSAGES),
    name: getRandomArrayElement(USER_NAMES)
  };
};

// Объект фотографий
const photoDetails = () => {
  photoId ++;
  photoUrl ++;

  const photoLike = getRandomInteger(likesCount.MIN, likesCount.MAX);
  const photocomments = getRandomInteger(commentsCount.MIN, commentsCount.MAX);
  const commentsList = Array.from({length: photocomments}, userComments);

  return {
    id: photoId,
    url: `photos/${photoUrl}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: photoLike,
    comments: commentsList
  };
};


const photosList = () => Array.from({length: PHOTOS_COUNT}, photoDetails);


export {
  photosList
};
