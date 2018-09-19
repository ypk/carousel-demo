import axios from 'axios';

const PIXABAY_API_URL = '//pixabay.com/api/';
const PIXABAY_API_KEY = '9656065-a4094594c34f9ac14c7fc4c39';
const PIXABAY_IMAGE_TYPE = 'photo';

class API {
  constructor () {
    let queryString = 'beautiful+landscape';
    this.API_URL = `${PIXABAY_API_URL}?key=${PIXABAY_API_KEY}&q=${queryString}&image_type=${PIXABAY_IMAGE_TYPE}`;
  }

  getImages () {
      return axios.get(this.API_URL).then((response)=>{
        // TBA
      },(response) => {
        throw new Error("An error has occurred: ", response);
      });
  }
}

export default API;
