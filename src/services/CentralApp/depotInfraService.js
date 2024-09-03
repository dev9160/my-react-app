import axios from 'axios';
import {API_URL} from '../centralAppApiUrls'

export const getDepotInfraDetails = async () => {
    try {
        const response = await axios.get(API_URL.getDepotInfraDetails);
        return response.data;
    } catch (error) {
        console.error("Error fetching users", error);
        throw error;
    }
};