import './NotFoundPage.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="not-found">
            <p className='not-found__err'>404</p>
            <p className='not-found__errtext'>Страница не найдена</p>
            <Link to='/'>Назад</Link> 
        </div>
    )
}

export default NotFoundPage;