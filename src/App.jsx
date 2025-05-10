import express from 'express';
import axios from 'axios';

const app = express();
const port = 9876;
const windowSize = 10;
let numberWindow = [];

const fetchNumbers = async (type) => {
    let url;
    switch (type) {
        case 'p':
            url = 'http://20.244.56.144/evaluation-service/primes';
            break;
        case 'f': 
            url = 'http://20.244.56.144/evaluation-service/fibo';
            break;
        case 'e': 
            url = 'http://20.244.56.144/evaluation-service/even';
            break;
        case 'r': 
            url = 'http://20.244.56.144/evaluation-service/rand';
            break;
        default: 
            return { numbers: [] };
    }
        try {
        const response = await axios.get(url, { timeout: 500 });
        return response.data;
    } catch (error) {
        console.error('Error fetching numbers:', error);
        return { numbers: [] };
    }
};



  export default fetchNumbers