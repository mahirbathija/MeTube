import axios from 'axios'

const KEY = 'AIzaSyCWrhjPfQX1n7AE0EQ_vLkLAhYER8B_v5w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 7,
        key: KEY
    }
});