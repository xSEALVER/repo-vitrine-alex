// import { Link } from "react-router-dom";

// function Navbar() {
//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className="bg-[#1A2D4D] shadow">
//       <div className="container mx-auto flex justify-between items-center px-8 py-4">
//         <div className="text-gray-800 text-lg font-semibold">
//           <Link
//             to="/"
//             className="text-gray-900 dark:text-white hover:text-[#D5906A] transition delay-150 duration-300 ease-in-out"
//           >
//             AudeMobilité
//           </Link>
//         </div>

//         <ul className="flex space-x-6">
//           <li>
//             <button
//               onClick={() => handleScroll("Apropos")}
//               className="text-gray-900 dark:text-white hover:text-[#D5906A] transition"
//             >
//               À propos
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleScroll("Objectif")}
//               className="text-gray-900 dark:text-white hover:text-[#D5906A] transition"
//             >
//               Objectif
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleScroll("Engagement")}
//               className="text-gray-900 dark:text-white hover:text-[#D5906A] transition"
//             >
//               Engagement
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleScroll("Services")}
//               className="text-gray-900 dark:text-white hover:text-[#D5906A] transition"
//             >
//               Services
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleScroll("Contact")}
//               className="text-gray-900 dark:text-white hover:text-[#D5906A] transition"
//             >
//               Contact
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // Import icons for the burger menu

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setIsOpen(false); // Close menu after clicking
//     }
//   };

//   return (
//     <nav className="bg-[#1A2D4D] shadow">
//       <div className="container mx-auto flex justify-between items-center px-8 py-4">
//         <div className="text-lg font-semibold">
//           <Link
//             to="/"
//             className="text-white hover:text-[#D5906A] transition"
//           >
//             AudeMobilité
//           </Link>
//         </div>

//         {/* Burger Menu Button */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           {["Apropos", "Objectif", "Engagement", "Services", "Contact"].map((section) => (
//             <li key={section}>
//               <button
//                 onClick={() => handleScroll(section)}
//                 className="text-white hover:text-[#D5906A] transition"
//               >
//                 {section}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-[#1A2D4D] px-8 py-4">
//           <ul className="space-y-4">
//             {["Apropos", "Objectif", "Engagement", "Services", "Contact"].map((section) => (
//               <li key={section}>
//                 <button
//                   onClick={() => handleScroll(section)}
//                   className="text-white block w-full text-left hover:text-[#D5906A] transition"
//                 >
//                   {section}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // Import icons for the burger menu

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setIsOpen(false); // Close menu after clicking
//     }
//   };

//   // Prevent scrolling when menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//   }, [isOpen]);

//   return (
//     <nav className="bg-[#1A2D4D] shadow fixed w-full top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center px-8 py-4">
//         <div className="text-lg font-semibold">
//           <Link to="/" className="text-white hover:text-[#D5906A] transition">
//             AudeMobilité
//           </Link>
//         </div>

//         {/* Burger Menu Button */}
//         <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
//           {isOpen ? <X size={32} /> : <Menu size={32} />}
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           {["Apropos", "Objectif", "Engagement", "Services", "Contact"].map((section) => (
//             <li key={section}>
//               <button
//                 onClick={() => handleScroll(section)}
//                 className="text-white hover:text-[#D5906A] transition"
//               >
//                 {section}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Full-Screen Mobile Menu */}
//       <div
//         className={`fixed inset-0 bg-[#1A2D4D] flex flex-col items-center justify-center transition-transform duration-500 z-50 ${
//           isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//         }`}
//       >
//         <button className="absolute top-6 right-6 text-white" onClick={toggleMenu}>
//           <X size={40} />
//         </button>
//         <ul className="space-y-8 text-2xl text-white">
//           {["Apropos", "Objectif", "Engagement", "Services", "Contact"].map((section) => (
//             <li key={section}>
//               <button
//                 onClick={() => handleScroll(section)}
//                 className="hover:text-[#D5906A] transition"
//               >
//                 {section}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // Import icons for the burger menu

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setIsOpen(false); // Close menu after clicking
//     }
//   };

//   // Prevent scrolling when menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//   }, [isOpen]);

//   return (
//     <nav className="bg-[#1A2D4D] shadow fixed w-full top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center px-8 py-4">
//         <div className="text-lg font-semibold">
//           <Link to="/" className="text-white hover:text-[#D5906A] transition">
//             AudeMobilité
//           </Link>
//         </div>

//         {/* Burger Menu Button */}
//         <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
//           {isOpen ? <X size={32} /> : <Menu size={32} />}
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           {["À propos", "Objectif", "Engagement", "Services", "Contact"].map((section) => (
//             <li key={section}>
//               <button
//                 onClick={() => handleScroll(section)}
//                 className="text-white hover:text-[#D5906A] transition"
//               >
//                 {section}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Full-Screen Mobile Menu with Smooth Open & Close */}
//       <div
//         className={`fixed inset-0 bg-[#1A2D4D] flex flex-col items-center justify-center transition-all duration-500 z-50 ${
//           isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//         }`}
//       >
//         <button className="absolute top-6 right-6 text-white" onClick={toggleMenu}>
//           <X size={40} />
//         </button>
//         <ul className="space-y-8 text-2xl text-white">
//           {["À propos", "Objectif", "Engagement", "Services", "Contact"].map((section) => (
//             <li key={section}>
//               <button
//                 onClick={() => handleScroll(section)}
//                 className="hover:text-[#D5906A] transition"
//               >
//                 {section}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for the burger menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden"; // Prevent scrolling when menu is open
  };

  // const handleScroll = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //     setIsOpen(false); // Close menu after clicking a link
  //     document.body.style.overflow = "auto"; // Restore scrolling
  //   }
  // };

  // const handleScroll = (sectionId, offset = 140) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     const rect = section.getBoundingClientRect();
  //     const scrollPosition = rect.top + window.pageYOffset - offset;

  //     window.scrollTo({
  //       top: scrollPosition,
  //       behavior: "smooth",
  //     });

  //     setIsOpen(false); // Close menu after clicking a link
  //     document.body.style.overflow = "auto"; // Restore scrolling
  //   }
  // };

  const handleScroll = (sectionId) => {
    const offsets = {
      Engagement: 140, // Custom offset for Engagement
      Objectif: 27, // Custom offset for Objectif
      Apropos: 60, // Custom offset for About
      Services: 80, // Custom offset for Services
      Contact: 25, // Custom offset for Contact
    };

    const section = document.getElementById(sectionId); // Use anchor ID

    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollPosition =
        rect.top + window.pageYOffset - (offsets[sectionId] || 100); // Default 100 if not specified

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      setIsOpen(false); // Close menu
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  };

  return (
    <nav className="bg-[#1A2D4D] shadow fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        <div className="text-lg font-semibold">
          <Link to="/" className="text-white hover:text-[#D5906A] transition">
            AudeMobilité
          </Link>
        </div>

        {/* Burger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["À propos", "Objectif", "Engagement", "Services", "Contact"].map(
            (section) => (
              <li key={section}>
                <button
                  onClick={() => handleScroll(section)}
                  className="text-white hover:text-[#D5906A] transition"
                >
                  {section}
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[#1A2D4D] flex flex-col items-center justify-center transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={toggleMenu}
        >
          <X size={32} />
        </button>
        <ul className="space-y-6 text-center">
          {["Apropos", "Objectif", "Engagement", "Services", "Contact"].map(
            (section) => (
              <li key={section}>
                <button
                  onClick={() => handleScroll(section)}
                  className="text-white text-xl hover:text-[#D5906A] transition"
                >
                  {section}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
