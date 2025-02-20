import { useEffect, useState } from 'react';
import axios from 'axios';
import { createClient } from '../api/movieClient';
import { MovieProps, MovieResponseType } from '../types';

const client = createClient(axios);

export const useMovieData = (page: number = 1) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [totalResults, setTotalResults] = useState<number>(0);

    useEffect(() => {
        setError(null);
        setIsLoading(true);

        const fetchMovies = async () => {
            const response: MovieResponseType = await client.getMovies(
                page,
                sessionStorage,
            );

            if (typeof response === 'string') {
                setError(response);
            } else {
                setMovies(response.result);
                setTotalResults(response.total);
            }
        };

        fetchMovies().finally(() => {
            setIsLoading(false);
        });

        return () => {};
    }, [page]);

    return {
        isLoading,
        error,
        movies,
        totalResults,
    };
};
