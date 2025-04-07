import { Link } from 'react-router-dom';
import GardenListItem from './GardenListItem.jsx';

function GardenList({ gardens }) {
    return (
        <ul className='bare-list cards'>
            {gardens?.map(jardin =>
                <li className='card' key={jardin.id}>
                    <Link className='card-link' to={`/item/${jardin.id}`}>
                        <GardenListItem jardin={jardin} />
                    </Link>
                </li>
            )}
        </ul>)
}

export default GardenList;