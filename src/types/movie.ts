export type MovieType = 'movie' | 'series' | 'episode';

export type SearchResultType = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: MovieType;
    Poster: string;
}

export type Movie = SearchResultType & { 
    Genre: string;
    Plot: string;
    Runtime: string;
    imdbRating: string;
    Actors: string;
    Director: string;
}