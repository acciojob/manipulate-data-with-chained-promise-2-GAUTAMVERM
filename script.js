//your JS code here. If required.
function initialPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function updateOutput(array) {
  document.getElementById('output').textContent = array.toString();
}

initialPromise()
  .then((array) => {
    const evenNumbers = array.filter(num => num % 2 === 0);
    return new Promise((resolve) => {
      setTimeout(() => {
        updateOutput(evenNumbers);
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    const doubled = evenNumbers.map(num => num * 2);
    return new Promise((resolve) => {
      setTimeout(() => {
        updateOutput(doubled);
        resolve();
      }, 2000);
    });
  });
