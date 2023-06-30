import { SearchResultType } from '../../types/movie';
import SearchResult from '../SearchResult';
import SearchResultGrid from '../SearchResultGrid';

import './SearchResults.scss';

type Props = {
    gridView: boolean;
    movies: SearchResultType[];
}

function SearchResults({ gridView, movies } : Props) {
    const results = movies.map((movie: SearchResultType) => {
        if (gridView) {
            return <SearchResultGrid key={movie.imdbID} movie={movie} className='search-result' /> 
        } 

        return <SearchResult key={movie.imdbID} movie={movie} className='search-result' />;
    })

    let searchResults;

    if (movies.length > 0) {
        searchResults = results;
    } else {
        return <></>
    }

    return (
        <ul className={`search-results ${gridView ? 'grid-view' : ''}`}>
            {searchResults}
        </ul>
    )
}

export default SearchResults;