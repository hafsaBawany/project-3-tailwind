import Header from '../header/page';
import Footer from '../footer/page';
import AboutUs from '../aboutus/page';
import Services from '../more/page';  // Assuming services is also in its own folder
//import Portfolio from '../portfolio/page';
import HeroSec from '../herosec/page'

const Home = () => {
  return (
    <div>
      <Header />
      <main>
      <HeroSec />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
