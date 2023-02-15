import { Navigate, useOutlet } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';
import { AppBar } from './AppBar';

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: 'Settings', path: 'settings' },
          { label: 'Profile', path: 'profile' },
          { label: 'Pictures', path: 'pictures' },
        ]}
      />
      {outlet}
    </div>
  );
};
