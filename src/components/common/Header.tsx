import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="container navbar mx-auto px-6 lg:px-2">
      <Link to={'/'} className="flex-1 text-xl font-bold">
        React Playground
      </Link>
      <div className="flex-none">
        <Link to={'/todo'} className="mx-2">
          Todo
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
