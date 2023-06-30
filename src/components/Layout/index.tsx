import { Link } from "react-router-dom";

import './Layout.scss';

type Props = {
    children: React.ReactNode
}

function Layout({children} : Props) {
    return (
        <div className='layout'>
            <header className='header'>
                <Link to={'/'} className={'header-link'}>
                    OPEN MOVIE
                </Link>
            </header>
            <main className='main'>
                {children}
            </main>
        </div>
    )
}

export default Layout;