import { FC } from 'react';
import { MovieProps } from '../../types';
import './MovieList.css';

type MovieItemType = {
    movie: MovieProps;
};

export const MovieItem: FC<MovieItemType> = ({ movie }) => {
    return (
        <li
            key={movie.id + movie.title}
            className="movie-item"
            data-testid="movie-item"
        >
            <img
                loading="lazy"
                src={movie.image_url}
                script-src={movie.image_url}
                alt={movie.title}
                className={`${
                    movie?.image_url === 'N/A'
                } ? image-skeleton : movie-item-poster`}
                data-testid="movie-item-poster"
            />

            <div className="movie-item-info">
                <h3 className="movie-title" data-testid="movie-title">
                    {movie.title}
                </h3>
                <p
                    className="movie-description"
                    data-testid="movie-description"
                >
                    {movie.description}
                </p>
                <p className="movie-rating" data-testid="movie-rating">
                    ⭐ {movie.rating}/10
                </p>
            </div>
        </li>
    );
};

export const MovieList: FC<{ movies: MovieProps[] }> = ({ movies }) => {
    return (
        <ul
            className="movie-list"
            aria-label="List of movies"
            data-testid="movie-list"
        >
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </ul>
    );
};
