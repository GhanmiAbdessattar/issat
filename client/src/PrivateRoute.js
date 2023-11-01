import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Route {...rest} element={element} />;
};

export default PrivateRoute;
