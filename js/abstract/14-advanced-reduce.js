"use strict";

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes);

/* поскольку подсчет лайков - не одиночная операция, напишем функцию
для подсчета лайков из коллекции */

const countLikes = (tweets) => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets));

/* соберем в массив все теги, которые встречаются в постах */

const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);
  return allTags;
}, []);

console.log(tags);

/* поскольку подсчет тегов - не одиночная операция, напишем функцию
для подсчета тегов из коллекции */

const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
  }, []);

console.log(getTags(tweets));
