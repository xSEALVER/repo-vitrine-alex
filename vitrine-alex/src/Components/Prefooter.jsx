const Prefooter = () => {
  const cards = [
    {
      title: "Transport sur mesure",
      copy: "Nous proposdons des services de transport personnalisés pour tous les particluiers et les enterprises adaptés à chaque situation et a chaque demande.",
      button: "View Trips",
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      title: "Accompagnement personnalisé",
      copy: "Notre equipe dediee offre un accompagnement personnalise pour faciliter les deplacements quotidiens et professionnels, en mettant l'accent sur la securiute, le confort et l'efficacite .",
      button: "View Trips",
      image:
        "https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      title: "Desert Destinations",
      copy: "It's the desert you've always dreamed of",
      button: "Book Now",
      image:
        "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      title: "Explore The Galaxy",
      copy: "Seriously, straight up, just blast off into outer space today",
      button: "Book Now",
      image:
        "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
  ];

  const Card = ({ title, copy, button, image }) => (
    <div
      className="relative flex items-end overflow-hidden p-4 w-full text-center text-white bg-gray-100 rounded-lg group h-[350px]
                    shadow-[0_1px_1px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.1),0_8px_8px_rgba(0,0,0,0.1),0_16px_16px_rgba(0,0,0,0.1)]"
    >
      {/* Background Image avec overlay gradient */}
      <div
        className="absolute inset-0 w-full h-[110%] bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[-4%]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "0 0",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent  translate-y-[-50%] transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[-50%]" />
      </div>

      {/* Contenu */}
      <div className="relative flex flex-col items-center w-full p-4 z-10 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0">
        <h2 className="text-xl font-bold leading-tight font-rubik mb-4">
          {title}
        </h2>

        <p className="font-cardo text-lg italic leading-relaxed opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-y-0 delay-100 mb-6">
          {copy}
        </p>

        <button className="cursor-pointer mt-6 py-3 px-6 text-xs font-bold tracking-wider uppercase text-white bg-black hover:bg-gray-800 transition-colors duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-100 focus:outline-dashed focus:outline-yellow-400 focus:outline-offset-2">
          {button}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="pb-12">
        <h1
          data-aos="fade-left"
          className="text-3xl font-semibold text-center sm:text-4xl font-serif"
        >
          Nos Services
        </h1>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto font-rubik">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </main>
    </>
  );
};

export default Prefooter;
