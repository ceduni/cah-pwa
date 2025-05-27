import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
        } catch (err) {
            console.error('Signup error:', err.message);
            alert('Signup failed');
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>S'inscrire</h2>
            <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Register</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </form>
    );
}
