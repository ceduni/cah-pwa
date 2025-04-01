import { NavLink } from 'react-router-dom';
import ProfilePicture from '../components/ProfilePicture';
import { USER_NAME, USER_HEADLINE } from '../globals';
import { useTranslation } from 'react-i18next'

function Nav() {
    return (
        <nav className='nav'>
            <ul className='bare-list nav-list'>
                <li className='nav-item'>
                    <NavLink className={'nav-link'} to="/">Accueil</NavLink>
                    <NavLink className={'nav-link'} to="/work">Réalisations</NavLink>
                </li>
            </ul>
        </nav>
    )
}

function Header({ noPicture = false }) {
    const { t, i18n } = useTranslation();

    const profileContent = (
        <div>
            <h1>{USER_NAME}</h1>
            <p>{t('headline')}</p>
        </div>
    );

    if (noPicture) {
        return (
            <header>
                <div className="profile">
                    {profileContent}
                </div>
                <Nav />
            </header>
        )
    }

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <header>
            <div>
                <button type="button" className={`btn-lang ${i18n.language === "en" ? 'active' : ''}`} onClick={() => handleLanguageChange('en')}>English</button>
                <button type="button" className={`btn-lang ${i18n.language === "fr" ? 'active' : ''}`}  onClick={() => handleLanguageChange('fr')}>Français</button>
            </div>
            <div className="profile">
                <ProfilePicture pictureURL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9p_svIjwA810BURgFBTU0V6fNjiU9MRbUXQ&s"} fallbackText='Ma photo' />
                {profileContent}
            </div>
            <Nav />
        </header>
    )
}

export default Header;