import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useAuth } from '../providers/AuthContext';

export default function Dashboard() {
    const [message, setMessage] = useState('');
    const { logout } = useAuth();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const token = await auth.currentUser.getIdToken();
    //         const res = await fetch('http://localhost:3001/api/protected', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });

    //         const text = await res.text();
    //         setMessage(text);
    //     };

    //     fetchData();
    // }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{message}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
