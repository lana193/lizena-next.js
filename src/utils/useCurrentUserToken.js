import { useState, useEffect } from 'react';

const useCurrentUserToken = () => {
    const [currentUserToken, setCurrentUserToken] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUserToken(window.localStorage.getItem('jwtToken'));
        }
    }, []);

    return currentUserToken;
}

export default useCurrentUserToken;