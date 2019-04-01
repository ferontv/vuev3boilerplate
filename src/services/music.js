import axios from 'axios';
import configService from './config';

const musicService = () => {
  axios.get(configService.apiUrl);
};

export default musicService;
