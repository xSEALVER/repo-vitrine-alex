import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        {/* Left-aligned logo or brand name */}
        <div className="text-gray-800 text-lg font-semibold">
          <Link to="/" className="hover:text-blue-600 transition">AudeMobilite</Link>
        </div>

        {/* Right-aligned navigation links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/apropos" className="text-gray-800 hover:text-blue-600 transition">À propos</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition">Contact</Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-800 hover:text-blue-600 transition">Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
