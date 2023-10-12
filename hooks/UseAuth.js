import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoadingInitial(false);
            setLoading(false);
        });
        return () => onSubscribe(); 
    }, []);

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error('Error during logout:', error);
            });
    };

    const memoValue = useMemo(() => {
        return { user, setUser, loading, setLoading, logout };
    }, [user, loading]);

    return (
        <AuthContext.Provider value={memoValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}


