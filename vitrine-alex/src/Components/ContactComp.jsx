import { MdOutlineMail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function ContactComp() {
  return (
    <div id="Contact">
      {/* Contact Section */}
      <section className="bg-black py-[12rem] mb-[12rem] ">
        <div className="container mx-auto flex flex-col md:flex-row justify-around text-center text-gray-700">
          <div className="flex flex-col items-center">
            <MdOutlineMail className="w-8 h-8 mb-4" />
            <p className="font-bold">EMAIL</p>
            <p>Contactez-nous</p>
          </div>
          <div className="flex flex-col items-center">
            <BsTelephoneInbound className="w-8 h-8 mb-4" />
            <p className="font-bold">TÉLÉPHONE</p>
            <p>01 42 25 38 25</p>
          </div>
          <div className="flex flex-col items-center">
            <CiLocationOn className="w-8 h-8 mb-4" />
            <p className="font-bold">ADRESSE</p>
            <p>24 rue Antoinette Besson</p>
          </div>
        </div>
      </section>

      {/* Pre-footer */}
      <section className="bg-teal-800 text-white py-16 px-8 md:flex md:justify-between">
        <div className="md:w-1/2">
          <p className="mb-6 leading-relaxed">
            Au pied des Champs-Elysées, notre restaurant vous propose une
            cuisine ambitieuse signée par le Chef
            <span className="font-bold"> Vivaldo Milani </span> et sublimée par
            <span className="font-bold"> Christien Ruel</span>, expert des vins
            et hôte d'exception.
          </p>
          <p className="leading-relaxed">
            Doté d'une terrasse, notre restaurant intimiste propose une carte de
            saison et maison. Le cadre artistique varie de semaines en semaines,
            vous laissant le loisir de regarder les toiles, ou de les commander
            pour votre plus grand plaisir.
          </p>
        </div>
        <div className="text-center mt-8 md:mt-0 md:w-1/3">
          <img
            className="w-32 mx-auto"
            src="https://24lerestaurant.fr/images/logo-800.png"
            alt="Logo"
          />
          <p className="mt-4">24 rue Antoinette Besson</p>
          <p>75008 Paris</p>
        </div>
      </section>

      
    </div>
  );
}

export default ContactComp;
