import axios from 'axios';

const KEY = 'AIzaSyANDw4Wo-7N53XMEPFkr2TPo7k90f4dguM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
      part: 'snippet',
      maxResults: '5',
      key: KEY
    }
});
