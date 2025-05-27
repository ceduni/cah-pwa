import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export default function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();
            onLogin(token);
        } catch (error) {
            console.error("Login error:", error.message);
            alert("Login failed");
        }
    };

    return (<>
        <form onSubmit={handleSubmit}>
            <h2>Se connecter</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">OK</button>
        </form>
        <p>Pas encore ouvert ton compte? <Link to="/signup">Inscris toi</Link></p>
    </>
    );
}
