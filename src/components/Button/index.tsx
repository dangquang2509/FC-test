import './Button.scss';

type Props = {
    text: string;
    onClick: () => void;
}

function Button({text, onClick}: Props) {
    return (
        <div className='btn-wrapper'>
            <button className='btn' onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default Button;