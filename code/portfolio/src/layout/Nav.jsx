import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <ul className='nav'>
            <li className='nav-item'>
                <NavLink className={'nav-link'} to={'/'}>Accueil</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className={'nav-link'} to={'/work'}>Réalisations</NavLink>
            </li>
        </ul>
    )
}

export default Nav