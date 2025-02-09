import { Outlet, useNavigation } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

function RootLayout () {
  const navigation = useNavigation();
  
  return (
    <div>
      <Navigation />
      { navigation.state === 'idle' ?   <Outlet />: <p>Loading...</p>}
    </div>
  );
}

export default RootLayout;