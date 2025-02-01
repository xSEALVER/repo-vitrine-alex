import { Link } from "react-router-dom";

function Navbar() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        <div className="text-gray-800 text-lg font-semibold">
          <Link to="/" className="hover:text-blue-600 transition">
            AudeMobilite
          </Link>
        </div>

        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => handleScroll("Apropos")}
              className="text-gray-800 hover:text-blue-600 transition"
            >
              À propos
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Services")}
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Contact")}
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
