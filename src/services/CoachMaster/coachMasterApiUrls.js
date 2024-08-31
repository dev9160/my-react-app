
export const baseUrl = 'http://localhost:9091/coachMaster';

export const API_URLS = {
    urlForCoachDetails: (coachId) => `${baseUrl}/getCoachDetails?coachId=${coachId}`,
    
};