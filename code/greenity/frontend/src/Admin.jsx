import { useAuth } from "./providers/AuthContext";
import { Navigate } from "react-router-dom";

const Admin = ({children}) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>
    }

    return user ? children : <Navigate to="/login" />
}

export default Admin