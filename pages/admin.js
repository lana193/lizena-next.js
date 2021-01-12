import { useState } from 'react';

import AdminLogOut from '../components/adminLogOut';
import AdminLogIn from '../components/adminLogIn';

const Admin = () => {
    const [currentUserToken, setCurrentUserToken] = useState(null);
    console.log('888token', currentUserToken);

    return (currentUserToken ?
        <AdminLogOut setCurrentUserToken={setCurrentUserToken} />
        : <AdminLogIn setCurrentUserToken={setCurrentUserToken}/>
    );
}

export default Admin;