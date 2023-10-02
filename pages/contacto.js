import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';
import SobreMi from '../sections/SobreMi';

const contacto = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
 
    <div className="relative">
      <div className="gradient-03 z-0" />
      
      {/* <SobreMi/> */}
    </div>
    {/*<World />*/}
    <div className="relative">
   
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default contacto;
