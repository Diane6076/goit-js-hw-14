function delayedPromise(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
 const promises1 = [
    delayedPromise('Проміс 1', 1000),
    delayedPromise('Проміс 2', 2000),
    delayedPromise('Проміс 3', 3000),
    delayedPromise('Проміс 4', 4000),
    delayedPromise('Проміс 5', 5000)
  ];
  
 Promise.all(promises1)
    .then(results => {
      console.log("Результати виконання промісів:");
      results.forEach(result => {
        console.log(result);
      });
    })
    .catch(error => {
      console.error('Сталася помилка:', error);
    });
  
  // Завдання 2: Змагання промісів
  

  function randomDelay(value) {
    const delay = Math.random() * (5000 - 1000) + 1000; // Випадкова затримка від 1000 до 5000 мілісекунд
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
const promises2 = [
    randomDelay('Проміс 1'),
    randomDelay('Проміс 2'),
    randomDelay('Проміс 3'),
    randomDelay('Проміс 4'),
    randomDelay('Проміс 5')
  ];
Promise.race(promises2)
    .then(result => {
      console.log("Найшвидший результат проміса:", result);
    })
    .catch(error => {
      console.error('Сталася помилка:', error);
});