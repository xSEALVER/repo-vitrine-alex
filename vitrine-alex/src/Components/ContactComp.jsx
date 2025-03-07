// import { MdOutlineMail } from "react-icons/md";
// import { BsTelephoneInbound } from "react-icons/bs";
// import { CiLocationOn } from "react-icons/ci";

// function ContactComp() {
//   return (
//     <div>
//       {/* Contact Section */}
//       <section
//         className="bg-[#1A2D4D] py-[16rem] my-[6rem]"
//         data-aos="fade-down"
//         data-aos-delay="500"
//       >
//         <div className="container mx-auto flex flex-col md:flex-row justify-around text-center text-[#D5906A]">
//           <div className="flex flex-col items-center">
//             <MdOutlineMail className="w-8 h-8 mb-4" />
//             <p className="font-bold">EMAIL</p>
//             <p>Contactez-nous</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <BsTelephoneInbound className="w-8 h-8 mb-4" />
//             <p className="font-bold">TÉLÉPHONE</p>
//             <p>01 42 25 38 25</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <CiLocationOn className="w-8 h-8 mb-4" />
//             <p className="font-bold">ADRESSE</p>
//             <p>24 rue Antoinette Besson</p>
//           </div>
//         </div>
//       </section>

//       {/* Pre-footer */}
//     </div>
//   );
// }

// export default ContactComp;

import { MdOutlineMail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function ContactComp() {
  return (
    <div>
      {/* Contact Section */}
      <section
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
      </section>
    </div>
  );
}

export default ContactComp;
