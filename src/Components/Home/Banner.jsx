const Banner = () => {
  return (
    <div className=" flex flex-col-reverse px-3 md:flex-row items-center justify-between gap-3 max-w-6xl">
      <div>
        <h1 className=" text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          One Step Closer To Your
          <span className="outline p-1 rounded text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Dream Job
          </span>
        </h1>
        <p className="text-gray-500 my-3 text-[18px]">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className=" text-white px-8 py-3 mt-6 rounded text-[15px] bg-gradient-to-r from-blue-500 to-purple-500">
          Get Started
        </button>
      </div>
      <img
        className="w-[500px]"
        src="/public/images/user.png"
        alt="Banner__img"
      />
    </div>
  );
};

export default Banner;
