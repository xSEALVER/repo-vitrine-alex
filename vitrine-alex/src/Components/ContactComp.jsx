// Form With submission to Formsubmit


// import { MdOutlineMail } from "react-icons/md";
// import { BsTelephoneInbound } from "react-icons/bs";
// import { CiLocationOn } from "react-icons/ci";

// function ContactComp() {
//   return (
//     <div>
//       <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
//       <h2 className="text-2xl font-bold mb-4">Contactez-Nous</h2>
//       <form 
//         action="https://formsubmit.co/miezaneric2@gmail.com" 
//         method="POST"
//       >
//         {/* Prevent CAPTCHA by telling Formsubmit to disable it (optional) */}
//         <input type="hidden" name="_captcha" value="false" />

        

//         <div className="mb-4">
//           <label className="block mb-1">Nom</label>
//           <input 
//             type="text" 
//             name="name" 
//             required 
//             placeholder="Votre nom"
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1">Email</label>
//           <input 
//             type="email" 
//             name="email" 
//             required 
//             placeholder="Votre email"
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1">Message</label>
//           <textarea 
//             name="message" 
//             required 
//             placeholder="Votre message"
//             className="w-full border p-2 rounded"
//             rows="4"
//           ></textarea>
//         </div>

//         <button 
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Envoyer message
//         </button>
//       </form>
//     </div>
//     </div> 
//   );
// }

// export default ContactComp;

// End Form With submission to Formsubmit


// import React, { useState } from "react";
// import { MdOutlineMail } from "react-icons/md";
// import { BsTelephoneInbound } from "react-icons/bs";
// import { CiLocationOn } from "react-icons/ci";

// function ContactComp() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("message", formData.message);
//     data.append("_captcha", "false"); // to disable captcha on Formsubmit

//     try {
//       const response = await fetch(
//         "https://formsubmit.co/ajax/miezaneric2@gmail.com",
//         {
//           method: "POST",
//           body: data,
//           headers: {
//             Accept: "application/json",
//           },
//         }
//       );

//       if (response.ok) {
//         setStatus("success");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       setStatus("error");
//     }
//   };

//   return (
//     <div>
//       <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-xl mb-72">
//         <h2 className="text-2xl font-bold mb-4">Contactez-Nous</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-1">Nom</label>
//             <input
//               type="text"
//               name="name"
//               required
//               placeholder="Votre nom"
//               className="w-full border p-2 rounded"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               placeholder="Votre email"
//               className="w-full border p-2 rounded"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1">Message</label>
//             <textarea
//               name="message"
//               required
//               placeholder="Votre message"
//               className="w-full border p-2 rounded"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             disabled={status === "sending"}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//           >
//             {status === "sending" ? "Envoi..." : "Envoyer message"}
//           </button>
//         </form>

//         {status === "success" && (
//           <p className="mt-4 text-green-600">
//             Votre message a été envoyé avec succès !
//           </p>
//         )}
//         {status === "error" && (
//           <p className="mt-4 text-red-600">
//             Oups ! Une erreur est survenue. Veuillez réessayer.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ContactComp;

import React, { useState } from "react";

function ContactComp() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/ajax/miezaneric2@gmail.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#1A2D4D]  mb-48"
      data-aos="fade-up"
      data-aos-delay="300"
      >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contactez-Nous
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Une question ? Un souci technique ? Écrivez-nous, nous vous répondrons rapidement.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
             Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Entrez votre nom"
              value={formData.name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Entrez votre email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              placeholder="Écrivez votre message ici..."
              value={formData.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="py-3 px-5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
          >
            {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 dark:text-green-400">✅ Message envoyé avec succès !</p>
          )}
          {status === "error" && (
            <p className="text-red-600 dark:text-red-400">❌ Une erreur est survenue. Veuillez réessayer.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactComp;




{/* Contact Section */}
      {/* <section
        className="bg-[#1A2D4D] py-48 md:py-48 my-[8rem]"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-around text-center text-[#D5906A] gap-12 md:gap-0">
          <div className="flex flex-col items-center">
            <MdOutlineMail className="w-10 h-10 md:w-12 md:h-12 mb-4" />
            <p className="font-bold text-lg md:text-xl">EMAIL</p>
            <p className="text-sm md:text-base">Contactez-nous</p>
          </div>
          <div className="flex flex-col items-center">
            <BsTelephoneInbound className="w-10 h-10 md:w-12 md:h-12 mb-4" />
            <p className="font-bold text-lg md:text-xl">TÉLÉPHONE</p>
            <p className="text-sm md:text-base">01 42 25 38 25</p>
          </div>
          <div className="flex flex-col items-center">
            <CiLocationOn className="w-10 h-10 md:w-12 md:h-12 mb-4" />
            <p className="font-bold text-lg md:text-xl">ADRESSE</p>
            <p className="text-sm md:text-base">24 rue Antoinette Besson</p>
          </div>
        </div>
      </section> */}