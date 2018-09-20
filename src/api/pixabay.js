import axios from 'axios';

const PIXABAY_API_URL = '//pixabay.com/api/';
const PIXABAY_API_KEY = '9656065-a4094594c34f9ac14c7fc4c39';
const PIXABAY_IMAGE_TYPE = 'photo';
const queryString = 'beautiful+landscape';

function getImages() {
  let apiUrl = `${PIXABAY_API_URL}?key=${PIXABAY_API_KEY}&q=${queryString}&image_type=${PIXABAY_IMAGE_TYPE}`;
  return axios.get(apiUrl)
    .then((response) => {
      if (response.data && (response.data.hits && response.data.hits.length > 0)) {
        return response.data.hits;
      } else {
        throw new Error("No data found!");
      }
    })
    .catch((response) => {
      throw new Error("An error has occurred: ", response);
    });
}

export default { getImages };
