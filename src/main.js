import renderPictures from './js/render-functions';
import { getPictures, userSearchQuery } from './js/pixabai-api';

//Declarations
const form = document.getElementById('form');
const loadMoreBtn = document.querySelector('.load-more-btn');
export const gallery = document.querySelector('.gallery');

form.addEventListener('submit', e => {
  e.preventDefault();

  //Getting info from the input
  const searchValue = e.target.elements.searchquery.value;
  if (searchValue.trim() === '') return;
  getPictures(searchValue, renderPictures);
});

loadMoreBtn.addEventListener('click', async () => {
  getPictures(userSearchQuery, renderPictures);
  console.log(userSearchQuery);
});
