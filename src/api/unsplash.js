import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 'Client-ID kIj-x9b661dXizkQJnaqmboM8garo2CayuD9MCHCl2I'
    }
});   