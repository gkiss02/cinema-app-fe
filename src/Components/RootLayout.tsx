import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

function RootLayout () {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet />
    </div>
  );
}

export default RootLayout;