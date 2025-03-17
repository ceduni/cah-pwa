import SocialLink from '../components/SocialLink';
import { USER_NAME} from '../globals';

function Footer() {
    return (
        <footer>
            <div className="social-links">
                <SocialLink url="#" text="LinkedIn"></SocialLink>
                <SocialLink url="#" text="GitHub"></SocialLink>
                <SocialLink url="#" text="Instagram"></SocialLink>
            </div>
            <p>© 2025 {USER_NAME}. Tous droits réservés.</p>
        </footer>
    )
}

export default Footer;