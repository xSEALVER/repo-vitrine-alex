import imgStory from "../assets/history-img.jpg"; // Replace with your image path



const HistorySection = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-red-500">UN PEU D'HISTOIRE</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Eu turpis egestas pretium aenean pharetra magna ac. Faucibus a pellentesque sit amet porttitor eget 
            dolor morbi non. Turpis egestas sed tempus urna et. Et molestie ac feugiat sed lectus vestibulum mattis.
            Nam aliquam sem et tortor consequat id porta nibh venenatis. Accumsan in nisl nisi scelerisque eu ultrices
            vitae auctor.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={imgStory}
            alt="MC Logo"
            className="w-3/4 opacity-80"
          />
        </div>
        
      </section>
    );
  };
  
  export default HistorySection;
  