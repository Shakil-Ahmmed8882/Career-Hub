import Banner from "./Banner";
import Jobs from "./jobs/Jobs";


const Home = () => {
      return (
            <div className=" space-y-3">
                  <div className="flex flex-col items-center">
                  <Banner></Banner>
                  </div>
                  <Jobs></Jobs>
            </div>
      );
};

export default Home;