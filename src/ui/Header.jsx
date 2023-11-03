import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="flex items-center gap-4 border-b border-stone-500 bg-yellow-400 px-4 py-3 font-pizza uppercase sm:px-6">
      <Link to="/" className="flex-1 tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <UserName />
    </header>
  );
}

export default Header;
