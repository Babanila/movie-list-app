import { AxiosInstance } from 'axios';
import { PAGE_SIZE } from '../helpers/constant';
import { MovieResponseType } from '../types';

const BASE_URL = process.env.REACT_APP_SERVER_URL || '';

export const createClient = (
    axios: AxiosInstance,
    baseUrl: string = BASE_URL,
) => {
    const getMovies = async (
        page: number,
        cache: Storage,
    ): Promise<MovieResponseType> => {
        const skip = (page - 1) * PAGE_SIZE;
        const url = `${baseUrl}/movies/?skip=${skip}&limit=${PAGE_SIZE}`;

        // Check url in cache
        const storedUrl = cache.getItem(url);
        const storedTotal = cache.getItem('total-results');
        if (storedUrl && storedTotal) {
            return {
                result: JSON.parse(storedUrl),
                total: JSON.parse(storedTotal),
            };
        }

        try {
            const response = await axios.get(url);

            if (response.data.Error) {
                throw new Error(response.data.Error);
            }

            const result = response.data?.items || [];
            const total = response.data?.total;

            cache.setItem(url, JSON.stringify(result));
            cache.setItem('total-results', JSON.stringify(total));
            return { result: [], total };
        } catch (error) {
            console.error(error);
            return 'Error fetching movies';
        }
    };

    return { getMovies };
};
