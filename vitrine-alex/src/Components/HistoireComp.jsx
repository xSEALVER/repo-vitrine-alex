const DiscoverSection = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900">Notre engagement</h2>
          <p className="text-xl text-gray-600 mt-2">A Tradition of Excellence and Innovation</p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <p className="text-gray-700 leading-relaxed">
            Come and explore our state-of-the-art facilities, meet our passionate faculty, and get a taste of the
            dynamic student life that awaits you here. Schedule your visit today and take the first step toward an
            exciting educational journey.
          </p>
        </div>
      </section>
    );
  };
  
  export default DiscoverSection;
  