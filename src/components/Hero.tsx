import heroBg from "../assets/hero-background.jpg";

const Hero = () => {
  return (
    <div className="relative flex h-[80vh] w-full items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <img
        src={heroBg}
        alt="hero background image"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/60 to-black/95" />
      <div className="absolute flex w-full max-w-[600px] flex-col items-center space-y-5 text-center drop-shadow-2xl">
        <h1 className="leading-right text-4xl font-bold md:text-5xl lg:text-6xl">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="font-normal drop-shadow-md sm:text-sm md:text-xl">
          Starts at $7.99. Cancel anytime.
        </p>
        <button className="group inline-flex min-w-[200px] cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 active:translate-y-0">
          Restart Your Membership
        </button>
      </div>
    </div>
  );
};

export default Hero;
