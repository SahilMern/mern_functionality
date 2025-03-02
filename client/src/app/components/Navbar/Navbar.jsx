import Link from 'next/link';
import { FaHome, FaInfoCircle, FaServicestack, FaPhone } from 'react-icons/fa'; // Importing icons from react-icons

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo or Brand Name */}
          <Link href="/" className="text-2xl font-bold text-white">
            MyBrand
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="flex items-center space-x-2 hover:text-gray-300">
            <span>Home</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-2 hover:text-gray-300">
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link href="/services" className="flex items-center space-x-2 hover:text-gray-300">
            <FaServicestack />
            <span>Services</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-2 hover:text-gray-300">
            <FaPhone />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu (hamburger) */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            {/* Add a hamburger menu icon here, if you want */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
