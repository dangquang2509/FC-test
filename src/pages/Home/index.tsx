import { useState, useEffect, useRef, FormEvent } from 'react';
import { MagnifyingGlass, ListBullets, DotsNine } from "@phosphor-icons/react";

import SearchResults from '../../components/SearchResults';
import Button from '../../components/Button';

import { searchMovies } from '../../services/movie';
import { SearchResultType, MovieType } from '../../types/movie';
import { MOVIE_TYPE, ICON_SIZE, ICON_COLOR, ICON_ACTIVE_COLOR, RESULTS_PER_LOAD } from '../../utils/constants';

import './Home.scss';

function Home() {
    const [movies, setMovies] = useState<SearchResultType[]>([]);
    const [title, setTitle] = useState<string>('');
    const [type, setType] = useState<MovieType>(MOVIE_TYPE.MOVIE);
    const [loading, setLoading] = useState<boolean>(false);
    const [gridView, setGridView] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [totalResults, setTotalResults] = useState<number>(0);

    const searched = useRef(false);
    
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMovies([]);
        setPage(1);
        setType(e.target.value as MovieType);
    }

    const queryMovies = async (page = 1 as number) => {
        setLoading(true);
        const response = await searchMovies(title, type, page);
        if (response.Search) {
            if (page === 1) {
                setMovies(response.Search);
            } else {
                setMovies([...movies, ...response.Search]);
                
            }
            setTotalResults(response.totalResults);
        } else {
            setTotalResults(0);
            setMovies([]);
        }
        setLoading(false);
    }

    const loadMore = () => {
        setPage(page => page + 1);
        queryMovies(page + 1);
    }

    useEffect(() => {
        if (title !== '') {
            queryMovies();
        }
    }, [type])


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        searched.current = true;
        setMovies([]);
        queryMovies();
    }

    const showLoadMoreBtn = page < Math.ceil(totalResults / RESULTS_PER_LOAD);
    
    return (
        <>
            <form className='header-search-form' onSubmit={handleSubmit}>
                <select 
                    className='header-search-form-select'
                    value={type}
                    onChange={handleTypeChange}
                >
                    <option value={MOVIE_TYPE.MOVIE}>Movie</option>
                    <option value={MOVIE_TYPE.SERIES}>Series</option>
                    <option value={MOVIE_TYPE.EPISODE}>Episode</option>
                </select>
                <input 
                    className='header-search-form-input'
                    value={title} 
                    onChange={handleTitleChange} 
                    placeholder={'Search for movie'}
                />
                <MagnifyingGlass color={'#FFFFFF'} size={ICON_SIZE} className='icon-search' />
            </form>

            <div className={'topbar'}>
                <div className='total'>
                    {searched.current ? `Found ${totalResults} ${type.toLowerCase()} in total` : ''}
                </div>
                <div className='topbar-icons'>
                    <ListBullets 
                        size={ICON_SIZE} 
                        color={gridView ? ICON_COLOR : ICON_ACTIVE_COLOR} 
                        className={`topbar-icon ${gridView ? '' : 'active'}`} 
                        onClick={() => setGridView(false)} 
                    />
                    <DotsNine 
                        size={ICON_SIZE}  
                        color={gridView ? ICON_ACTIVE_COLOR : ICON_COLOR} 
                        className={`topbar-icon ${gridView ? 'active' : ''}`} 
                        onClick={() => setGridView(true)} 
                    />
                </div>
            </div>
             
            {searched.current && 
                <SearchResults
                    movies={movies}
                    gridView={gridView}
                />
            }

            {loading && <div className='loading'>Loading...</div>}

            {showLoadMoreBtn && 
                <Button
                    onClick={loadMore}
                    text={'Load more'}
                />
            }
        </>
    )
}

export default Home;
