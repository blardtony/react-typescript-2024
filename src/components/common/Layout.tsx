import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 lg:px-2">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
