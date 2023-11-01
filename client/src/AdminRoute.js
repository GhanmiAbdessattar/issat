import { Navigate, Route } from 'react-router-dom';

const AdminRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token || role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return <Route {...rest} element={element} />;
};

export default AdminRoute;
