

import { Navigate } from 'react-router-dom';
import { useAute } from '../../contex/aute';


const PrivateRoute = ({ children }) => {
    const { currentUser } = useAute()
    console.log("childern",currentUser)
 
    return currentUser? children:<Navigate to='/login'/>;
}

export default PrivateRoute