import axios from 'axios';

const KEY ='AIzaSyD5AKcjJiizBnE8v-5xjiCEzzZcdXOr_M0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
});
