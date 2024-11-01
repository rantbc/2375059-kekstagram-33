const PHOTOS_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;
const MIN_AVATAR_COUNT = 1;
const MAX_AVATAR_COUNT = 6;

let photoId = 0;
let photoUrl = 0;
let commentId = 0;

const USER_NAMES = [
  'София',
  'Марьям',
  'Анна',
  'Нина',
  'Елизавета',
  'Аиша',
  'Алёна',
  'Дмитрий',
  'Матвей',
  'Егор'
];

const USER_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTO_DESCRIPTION = [
  'День рождения',
  'Новый год',
  'На природе',
  'На море',
  'Осень',
  'Свадьба'
];


// Счетчик рандомных чисел
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Объект комментариев
const userComments = () => {
  commentId += 1;

  const userAvatar = getRandomInteger(MIN_AVATAR_COUNT, MAX_AVATAR_COUNT);
  const userMessage = getRandomInteger(0, USER_MESSAGES.length - 1);
  const userName = getRandomInteger(0, USER_NAMES.length - 1);

  return {
    id: commentId,
    avatar: `img/avatar-${userAvatar}.svg`,
    message: USER_MESSAGES[userMessage],
    name: USER_NAMES[userName]
  };
};

// Объект фотографий
const photoDetails = () => {
  photoId += 1;
  photoUrl += 1;

  const photoDescription = getRandomInteger(0, PHOTO_DESCRIPTION.length - 1);
  const photoLike = getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT);
  const photocomments = getRandomInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT);

  /*const commentsList = [];
  for (let i = 0; i < photocomments; i++) {
    commentsList.push(userComments());
  }*/

  const commentsList = Array.from({length: photocomments}, userComments);

  return {
    id: photoId,
    url: `photos/${photoUrl}.jpg`,
    description: PHOTO_DESCRIPTION[photoDescription],
    likes: photoLike,
    comments: commentsList
  };
};


const photosList = Array.from({length: PHOTOS_COUNT}, photoDetails);

/*for (let i = 1; i <= PHOTOS_COUNT; i++) {
  photosList.push(photoDetails());
}*/

console.log(photosList);
