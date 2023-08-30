// Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve('Hello World!');
//   }, 2000);

//   setTimeout(() => {
//       reject(new Error('Hello Error!'));
//   }, 2000);
// });

// promise.catch((error) => {
//   console.log(error);
// });

// promise.then((result) => {
//   console.log(result);
// });

// promise.finally(() => {
//   console.log('Done!');
// });

// // Ejemplo Promise.all
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve('Hello World!');
//   }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve('Hello World!');
//   }, 2000);
// });

// Promise.all([promise1, promise2])
//   .then((result) => {
//       console.log(result);
//   })
//   .catch((error) => {
//       console.log(error);
//   });

// Ejemplo Promise.allSettled
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('Hello World!');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject(new Error('Hello Error!'));
  }, 2000);
});

Promise.allSettled([promise1, promise2])
  .then((result) => {
      console.log(result);
  }
);



