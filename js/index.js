///Task 4
let currentLight = 0;
let lights = document.querySelectorAll('.light');
let button = document.getElementById('btn');

btn.addEventListener('click', function() {
  lights.forEach(light => light.style.backgroundColor = '');
  currentLight = (currentLight + 1) % lights.length;
  if (currentLight === 0) {
    lights[currentLight].style.backgroundColor = 'red';
  } else if (currentLight === 1) {
    lights[currentLight].style.backgroundColor = 'orange';
  } else if (currentLight === 2) {
    lights[currentLight].style.backgroundColor = 'green';
  }
});
///Task 5
const books = document.querySelectorAll('.book');

books.forEach(function(book) {
  book.addEventListener('click', function() {
    books.forEach(function(book) {
      book.classList.remove('selected');
    });
    book.classList.add('selected');
  });
});

