import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProtectedRoute = (props) => {

const {login} = React.useContext(UserContext);

return login ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
