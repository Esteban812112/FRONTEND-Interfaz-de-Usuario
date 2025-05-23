import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Cambiar por la URL de tu backend

export const fetchReviews = async () => {
    const response = await axios.get(`${API_URL}/review`);
    return response.data;
};

export const createReview = async (reviewData) => {
    const response = await axios.post(`${API_URL}/review`, reviewData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
};

export const deleteReview = async (reviewId) => {
    const response = await axios.delete(`${API_URL}/review/${reviewId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};

export const updateReview = async (reviewId, reviewData) => {
    const response = await axios.put(`${API_URL}/review/${reviewId}`, reviewData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};

