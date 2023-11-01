import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthGuard({ children }) {
  const navigate = useNavigate();

  useEffect(() => {

    const authToken = localStorage.getItem('token');

    if (!authToken) {

      navigate('/login');
    }
  }, []);

  return children;
}

export default AuthGuard;
