import axios from 'axios';
import {API_URL} from '../centralAppApiUrls'

export const getUnusualDetails = async () => {
    try {
        const response = await axios.get(API_URL.getUnusualDetails);
        return response.data;
    } catch (error) {
        console.error("Error fetching users", error);
        throw error;
    }
};