'use strict';

// Promise
// .then(()=>{})

// load()
//   .then(value => {})
//   .then(d => {})
//   .then(d => {})
//   .then(d => {})
//   .catch(error => {})
//   .finally();

// load().then(
//   value => {},
//   error => {}
// );

// console.log('start :>> ');

// const data = fetch('./users.json');
// const usefullData = data
//   .then(response => {
//     return response.json();
//   })

// usefullData.then(user => {
//   console.log('user :>> ', user);
// });

// fetch('./users.json')
//   .then(response => {
//     return response.json();
//   })
//   .then(user => {
//     console.log('user :>> ', user);
//   })
//   .catch(e => {
//     console.log('e :>> ', e);
//   });

// while (true) {
//   if (promise.state === 'fulfilled') {
//     thenCallback(promise.result);
//   }
//   if (promise.state === 'rejected') {
//     catchCallback(promise.result);
//   }
// }

// console.log('end :>> ');

//----------------------------------------------------

// const p = new Promise((resolve, reject) => {
//   reject(new Error('bad'));
// });

// p.then(d => console.log('d', d)).catch(e => console.log('error', e));

// кот Шредингера
console.log('start');
const shredCat = new Promise((res, rej) => {
  const catDestiny = Math.random();
  console.log('catDestiny', catDestiny);
  catDestiny < 0.5 ? res('Кот жив') : rej(new Error('Коту не очень повезло'));
  res('repeat');
  rej(new Error('repeat'));
});

shredCat
  .then(result => console.log('result', result))
  .catch(err => console.log('err', err));

console.log('end');
// промисификация функции на коллбеках
// setTimeout(callback,ms)
// delay(ms).then(callback);

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }
// // pend->fullfilled
// delay(5000).then(() => console.log('Fullfiled'));

// загрузка изображения

// const src = 'https://klike.net/uploads/posts/2019-01/1547365376_1.jpg';
// loadImage(src);

// function loadImage(src) {
//   const img = document.createElement('img');
//   img.src = src;
//   img.onload = function (e) {
//     document.body.append(img);
//   };
//   img.onerror = function () {
//     img.src = './def.jpg';
//   };
// }

// const src = 'https://klike.net/uploads/posts/2019-01/1547365376_1.jpg11';
// loadImage(src)
//   .then(img => document.body.append(img))
//   .catch(e => console.log('e', e))
//   .finally(() => {
//     console.log('common procedures');
//   });

// loadImage(src).then(
//   img => document.body.append(img),
//   e => console.log('e', e)
// );
// .catch(e => console.log('e', e));

// function loadImage(src) {
//   const img = document.createElement('img');
//   img.src = src;

//   return new Promise((resolve, reject) => {
//     img.onload = function (e) {
//       resolve(img);
//     };
//     img.onerror = function () {
//       // img.src = './def.jpg';
//       reject(new Error('image was not loaded'));
//     };
//   });
// }
