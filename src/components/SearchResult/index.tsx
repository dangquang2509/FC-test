import { Link } from "react-router-dom";

import { SearchResultType } from '../../types/movie';
import './SearchResult.scss';

type Props = {
    movie: SearchResultType
    className?: string
}

function SearchResult({movie, className} : Props) {
    const { Title, Poster, Year, Type, imdbID } = movie;
    
    return (
        <div className={`search-item ${className}`}>
            <Link to={`detail?id=${imdbID}`}>
                <img src={Poster} className={'poster'} />
            </Link>
            <div className='info'>
                <Link to={`detail?id=${imdbID}`} className='title'>
                    {Title}
                </Link>
                <div className='desc'>{Year}</div>
                <div className='desc'>{Type}</div>
            </div>
        </div>
    )
}

export default SearchResult;
