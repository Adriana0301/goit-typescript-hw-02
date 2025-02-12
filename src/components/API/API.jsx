import axios from 'axios';
const API_KEY = 'RBTkvXB46BeSnAPpFHVqJzLaY377shfkafR0-veN3Xw';
const BASE_URL = 'https://api.unsplash.com/search/photos';

const FetchImages = async (query, page) => {
  const {data} = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 15,
      orientation: 'portrait',
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });

  return data;

};


export default FetchImages;