import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container navbar mx-auto px-6 lg:px-2">
      <Link to={'/'} className="flex-1 text-xl font-bold">
        React Playground
      </Link>
    </header>
  );
};

export default Header;
