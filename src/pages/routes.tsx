import HomePage from './Home';
import DetailPage from './Detail';

export default [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/detail',
        element: <DetailPage />
    }
];
