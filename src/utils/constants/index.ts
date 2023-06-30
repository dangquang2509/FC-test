import { MovieType } from '../../types/movie';

export const MOVIE_TYPE : { [key: string] : MovieType} = {
    MOVIE: 'movie',
    SERIES: 'series',
    EPISODE: 'episode'
}

export const ICON_SIZE = 24;

export const ICON_COLOR = '#424242';

export const ICON_ACTIVE_COLOR = '#abb7c4';

export const RESULTS_PER_LOAD = 10;