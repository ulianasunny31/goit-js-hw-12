import renderPictures from './js/render-functions';
import getPictures from './js/pixabai-api';

//Declarations
const form = document.getElementById('form');

export const gallery = document.querySelector('.gallery');

form.addEventListener('submit', e => {
  e.preventDefault();
  gallery.innerHTML = '';

  //Getting info from the input
  const searchValue = e.target.elements.searchquery.value;
  if (searchValue.trim() === '') return;
  getPictures(searchValue, renderPictures);
});

// const rect = gallery.getBoundingClientRect();
// console.log(rect);
