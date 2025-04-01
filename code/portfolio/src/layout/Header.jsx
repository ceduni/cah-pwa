import ProfilePicture from '../components/ProfilePicture';
import { USER_NAME, USER_HEADLINE } from '../globals';
import Nav from './Nav';


function Header({ noPicture = false }) {
    const profileContent = (
        <div>
            <h1>{USER_NAME}</h1>
            <p>{USER_HEADLINE}</p>
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
    return (
        <header>
            <div className="profile">
                <ProfilePicture pictureURL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9p_svIjwA810BURgFBTU0V6fNjiU9MRbUXQ&s"} fallbackText='Ma photo' />
                {profileContent}
            </div>

            <Nav />
        </header>
    )
}

export default Header;