import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-green-900 p-6">
      <ul className="flex justify-center space-x-8">
       
        <li>
          <Link href="/aboutus" passHref>
            <span className="text-white hover:text-green-300 text-lg font-semibold">About Us</span>
          </Link>
        </li>
        <li>
          <Link href="/more" passHref>
            <span className="text-white hover:text-green-300 text-lg font-semibold">Services</span>
          </Link>
        </li>
        <li>
          <Link href="/portfolio" passHref>
            <span className="text-white hover:text-green-300 text-lg font-semibold">Portfolio</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

  