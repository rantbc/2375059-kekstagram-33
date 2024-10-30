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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const userComments = () => {
  const userId = Math.floor(Math.random() * 1000);
  const userAvatar = getRandomInteger(1, 6);

  const userMessageOne = getRandomInteger(0, USER_MESSAGES.length - 1);
  const userMessageTwo = getRandomInteger(0, USER_MESSAGES.length - 1);

  let userMessage;

  // выводим на выбор 1 или 2 предложения из USER_MESSAGES в зависимости от идентификатора (четный/нечетный)
  if (userId % 2 === 0) {
    userMessage = USER_MESSAGES[userMessageOne];
  } else {
    userMessage = `${USER_MESSAGES[userMessageOne]} ${USER_MESSAGES[userMessageTwo]}`;
  }

  const userName = getRandomInteger(0, USER_NAMES.length - 1);

  return {
    id: userId,
    avatar: `img/avatar-${userAvatar}.svg`,
    //message: USER_MESSAGES[userMessage],
    message: userMessage,
    name: USER_NAMES[userName]
  };
};

const photoDetails = () => {
  const photoId = getRandomInteger(1, 25);
  const photoUrl = getRandomInteger(1, 25);
  const photoDescription = getRandomInteger(0, PHOTO_DESCRIPTION.length - 1);
  const photoLike = getRandomInteger(15, 200);

  // создаем переменную для получения случайного набора комментариев
  const commentIndex = getRandomInteger(1, 30);

  // создаем массив для хранение комментариев
  const commentsList = [];

  // пишем цикл для вывода случайного количества комментариев
  for (let i = 0; i < commentIndex; i++) {
    commentsList.push(userComments()); // на каждой итерации добавляем по одному комментарию
  }

  return {
    id: photoId,
    url: `photos/${photoUrl}.jpg`,
    description: PHOTO_DESCRIPTION[photoDescription],
    likes: photoLike,
    comments: commentsList // передаем массив комментариев
  };
};

console.log(photoDetails());
