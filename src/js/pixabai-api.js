//Imports
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

//Declarations
const loadMoreBtn = document.querySelector('.load-more-btn');
const key = '41103551-afb5440a0c91585482e280fcd';
const loader = document.querySelector('.loader');
export let userSearchQuery = '';
let page = 1;
let perPage = 15;

export async function getPictures(query, renderFn) {
  if (userSearchQuery !== query) {
    userSearchQuery = query;
    page = 1;
  }

  //search parameters
  const searchParams = new URLSearchParams({
    key,
    page,
    per_page: perPage,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  try {
    const res = await axios.get(url);
    const pictures = res.data.hits;
    const totalHits = res.data.totalHits;

    if (pictures.length === 0 && page === 1) {
      iziToast.error({
        title: 'No pictures found',
        message: 'Try another query',
        messageColor: 'black',
        messageSize: '14px',
        position: 'topCenter',
        timeout: 3000,
        closeOnClick: true,
      });
    } else {
      page += 1;
      //showing the found pictures
      renderFn(pictures);
      loadMoreBtn.classList.toggle('visible', 'not-visible');
    }
    //no more pictures logic
    if (page > Math.ceil(totalHits / perPage)) {
      loadMoreBtn.classList.toggle('not-visible', 'visible');
      iziToast.error({
        title: `We're sorry, but you've reached the end of search results.`,
        message: 'Try another query',
        messageColor: 'black',
        messageSize: '14px',
        position: 'topCenter',
        timeout: 3000,
        closeOnClick: true,
      });
    } else {
      loadMoreBtn.classList.toggle('visible', 'not-visible');
    }
  } catch (e) {
    console.error(e);
  } finally {
    loader.computedStyleMap.display = 'none';
  }
}
