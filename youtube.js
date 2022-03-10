import axios from 'axios';

const KEY = 'AIzaSyCFpYE4Tfuk8qmbnONefWJx9AVlFSTxNPQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        
    }
});