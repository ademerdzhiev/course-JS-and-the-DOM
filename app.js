document.addEventListener('click', function () {
  console.log("click, click");
})

const startingTime = performance.now();

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    console.log('i and j are: ' , i , j);
  }
}

const endingTime = performance.now();

console.log('This code took ' + (endingTime - startingTime) + ' miliseconds to run');
