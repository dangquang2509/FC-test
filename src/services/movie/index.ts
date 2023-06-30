import axios from 'axios';

export async function searchMovies(movieTitle: string, type: string, page = 1 as number) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}&s=${movieTitle}&type=${type}&page=${page}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getMovie(movieId: string) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}&i=${movieId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
