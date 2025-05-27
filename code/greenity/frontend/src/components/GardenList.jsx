import { Link } from 'react-router-dom';
import GardenListItem from './GardenListItem.jsx';

function GardenList({ gardens }) {
    return (
        <ul className='bare-list cards'>
            {gardens?.map(garden =>
                <li className='card' key={garden.id}>
                    <Link className='card-link' to={`/item/${garden.id}`}>
                        <GardenListItem garden={garden} />
                    </Link>
                </li>
            )}
        </ul>)
}

export default GardenList;