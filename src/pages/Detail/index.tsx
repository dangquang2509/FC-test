import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";

import Button from '../../components/Button';
import MovieInfo from '../../components/MovieInfo';
import { getMovie } from '../../services/movie';
import { Movie } from '../../types/movie';

import './Detail.scss';

function Detail() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [movie, setMovie] = useState<Movie>({} as Movie);

    useEffect(() => {
        const getMovieDetail = async () => {
            const id = searchParams.get('id') || '';
            const response = await getMovie(id);
            setMovie(response);
        }

        getMovieDetail();
    }, []);

    const { Title, Poster, Plot, Year, Runtime, imdbRating, Genre, Actors, Director } = movie;

    const onBack = () => {
        navigate('/');
    }

    return (
        <>
            <div className='detail'>
                <img src={Poster} alt={'poster'} className='poster' />
                <div className='info'>
                    <div className='title'>{Title}</div>
                    <div className='plot'>{Plot}</div>
                    <MovieInfo
                        title={'Director'}
                        desc={Director} 
                    />
                    <MovieInfo
                        title={'Actors'}
                        desc={Actors} 
                    />
                    <MovieInfo
                        title={'Year'}
                        desc={Year} 
                    />
                    <MovieInfo
                        title={'Genre'}
                        desc={Genre} 
                    />
                    <MovieInfo
                        title={'Runtime'}
                        desc={Runtime} 
                    />
                    <MovieInfo
                        title={'imdb Rating'}
                        desc={imdbRating} 
                    />
                </div>
            </div>

            <Button
                text={'Back to Home'}
                onClick={onBack}
            />
        </>
    )
}

export default Detail;
