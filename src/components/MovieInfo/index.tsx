import './MovieInfo.scss';

type Props = {
    title: string;
    desc: string;
}

function MovieInfo({title, desc}: Props) {
    return (
        <div className='movie-info'>
            <p>{title}</p>
            <span>{desc}</span>
        </div>
    )
}

export default MovieInfo;
