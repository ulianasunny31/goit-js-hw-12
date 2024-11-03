//Imports
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

//Declarations
const loadMoreBtn = document.querySelector('.load-more-btn');
const key = '41103551-afb5440a0c91585482e280fcd';
const loader = document.querySelector('.loader');
let page = 1;
let perPage = 15;

async function getPictures(query) {
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

  const res = await axios.get(url);
  loader.style.display = 'block';
  const pictures = res.data;

  if (pictures.length === 0) {
    iziToast.error({
      title: 'No pictures found',
      message: 'Try another query',
      messageColor: 'black',
      messageSize: '14px',
      position: 'topCenter',
      timeout: 3000,
      closeOnClick: true,
    });
  }
  //rendering
  loader.style.display = 'none';
  renderFn(pictures);
}

export default getPictures;
