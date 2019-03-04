import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3470bfe40642d6accb91699dd35f414ebebd6e43ae2126dcac7685f5ec9dcb33'
    }
});