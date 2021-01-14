import { useState } from 'react';

import AdminLogOut from '../components/adminLogOut';
import AdminLogIn from '../components/adminLogIn';

const Admin = () => {
    const [currentUserToken, setCurrentUserToken] = useState(null);

    return (currentUserToken ?
        <AdminLogOut setCurrentUserToken={setCurrentUserToken} />
        : <AdminLogIn setCurrentUserToken={setCurrentUserToken}/>
    );
}

export default Admin;