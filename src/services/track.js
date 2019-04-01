import axios from 'axios';
import configService from './config';
// import musicService from './music';

const trackService = {};

trackService.search = (q) => {
  const type = 'track';
  // return musicService.get('/search', {
  //   params: { q, type },
  // }).then(res => res.data);
  return axios.get(`${configService.apiUrl}/search`, {
    params: { q, type },
  }).then(res => res.data);
};

export default trackService;
