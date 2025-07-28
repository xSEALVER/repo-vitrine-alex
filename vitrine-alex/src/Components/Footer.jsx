// import React from "react";

// const Footer = () => {
//   return (
//     <footer class="p-4 md:p-8 lg:p-10 bg-[#1A2D4D]">
//       <div class="mx-auto max-w-screen-xl text-center">
//         <a
//           href="#"
//           class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
//         >
//           AudeMobilité
//         </a>
//         <p class="my-6 text-gray-500 dark:text-gray-400">

//         </p>
//         <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
//           <li>
//             <a href="#" class="mr-4 hover:underline md:mr-6 ">
//               À propos
//             </a>
//           </li>
//           <li>
//             <a href="#" class="mr-4 hover:underline md:mr-6">
//               Objectif
//             </a>
//           </li>
//           <li>
//             <a href="#" class="mr-4 hover:underline md:mr-6 ">
//               Engagement
//             </a>
//           </li>
//           <li>
//             <a href="#" class="mr-4 hover:underline md:mr-6">
//               Blog
//             </a>
//           </li>
//           <li>
//             <a href="#" class="mr-4 hover:underline md:mr-6">
//               Contact
//             </a>
//           </li>
//         </ul>
//         <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
//           © 2021-2022{" "}
//           <a href="#" class="hover:underline">
//             Audemobilité™
//           </a>
//           . Tous droits réservés.
//         </span>
//       </div>
//       <div class="flex justify-center space-x-6 mt-3">
//         <a
//           href="https://www.instagram.com/votre_compte"
//           target="_blank"
//           class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//         >
//           <svg
//             class="w-6 h-6"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M7.75 2C4.3 2 2 4.3 2 7.75v8.5C2 19.7 4.3 22 7.75 22h8.5c3.45 0 5.75-2.3 5.75-5.75v-8.5C22 4.3 19.7 2 16.25 2h-8.5zm0 1.5h8.5c2.6 0 4.25 1.65 4.25 4.25v8.5c0 2.6-1.65 4.25-4.25 4.25h-8.5C5.15 20.5 3.5 18.85 3.5 16.25v-8.5C3.5 5.15 5.15 3.5 7.75 3.5zm8.75 3.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z" />
//           </svg>
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-[#1A2D4D]">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white mb-5"
        >
          AudeMobilité
        </a>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <button
              onClick={() => handleScroll("Apropos")}
              className="mr-4 hover:underline md:mr-6"
            >
              À propos
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Objectif")}
              className="mr-4 hover:underline md:mr-6"
            >
              Objectif
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Engagement")}
              className="mr-4 hover:underline md:mr-6"
            >
              Engagement
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Blog")}
              className="mr-4 hover:underline md:mr-6"
            >
              Blog
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Contact")}
              className="mr-4 hover:underline md:mr-6"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* ✅ Email section */}
        <p className="mb-4 text-gray-400">
          Contactez-nous :{" "}
          <a
            href="mailto:audemobilite@gmail.com"
            className="underline hover:text-white"
          >
            audemobilite@gmail.com
          </a>
        </p>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a className="hover:underline">
            Audemobilité™
          </a>
          . Tous droits réservés.
        </span>
      </div>
      <div className="flex justify-center space-x-6 mt-3">
        <a
          href="https://www.instagram.com/audemobilite/"
          target="_blank"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          rel="noopener noreferrer"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.75 2C4.3 2 2 4.3 2 7.75v8.5C2 19.7 4.3 22 7.75 22h8.5c3.45 0 5.75-2.3 5.75-5.75v-8.5C22 4.3 19.7 2 16.25 2h-8.5zm0 1.5h8.5c2.6 0 4.25 1.65 4.25 4.25v8.5c0 2.6-1.65 4.25-4.25 4.25h-8.5C5.15 20.5 3.5 18.85 3.5 16.25v-8.5C3.5 5.15 5.15 3.5 7.75 3.5zm8.75 3.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
