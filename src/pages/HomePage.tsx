import { useState } from 'react';
import { Heading } from '../components/Header';
import { MovieList } from '../components/MovieList';
import { useMovieData } from '../hooks/useMovieData';
import { PAGE_SIZE } from '../helpers/constant';
import { Pagination } from '../components/Pagination';

export default function HomePage() {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const { isLoading, error, movies, totalResults } = useMovieData(pageNumber);

    let totalPage = 1;
    if (totalResults > 0) {
        totalPage = Math.ceil(totalResults / PAGE_SIZE);
    }

    return (
        <div className="homepage">
            <Heading level={1} style={{ textAlign: 'center' }}>
                List of Movies
            </Heading>
            {isLoading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            {movies.length === 0 && (
                <p className="empty-movie-list">No movies to display</p>
            )}
            {movies.length > 0 && (
                <>
                    <MovieList movies={movies} />
                    <Pagination
                        pageNumber={pageNumber}
                        totalPage={totalPage}
                        onSetPage={setPageNumber}
                    />
                </>
            )}
        </div>
    );
}
