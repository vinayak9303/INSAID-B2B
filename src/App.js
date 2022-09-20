import logo from './logo.svg';
import contactbackground from './images/contact-bg.png';

import './App.css';
import './navbar.scss';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { useMediaQuery } from 'react-responsive';
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import ContactForm from './components/Contactform';

import HomeHeaderSection from './components/HomeHeaderSection';
import HomeHeaderSectionMobile from './components/HomeHeaderSectionMobile';
import HomeSecondSection from './components/HomeSecondSection';
import HomeThirdSection from './components/HomeThirdSection';
import HomeFourthSection from './components/HomeFourthSection';
import HomeFifthSection from './components/HomeFifthSection';
import HomeSixthSection from './components/HomeSixthSection';
import HomeSeventhSection from './components/HomeSeventhSection';
import HomeEightthSection from './components/HomeEightthSection';
import Footer from './components/Footer';
import HomeSecondSectionMobile from './components/HomeSecondSectionMobile';
import HomeThirdSectionMobile from './components/HomeThirdSectionMobile';
import HomeFourthSectionMobile from './components/HomeFourthSectionMobile';
import HomeFifthSectionMobile from './components/HomeFifthSectionMobile';

function App() {
  const caterbg = {
    backgroundColor: "#F2F9FF",
  };

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 980px)",
  });
  
  const isSmallScreen = useMediaQuery({
    query: "(max-device-width: 981px )",
  });
  

  return (
    <div className="App">
      <Navbar />
      {/* <div className='my-5'></div> */}
      
      <div className='px-5'>
      {isBigScreen && <HomeHeaderSection /> }
      </div>
      {isSmallScreen && <HomeHeaderSectionMobile />}
      {isBigScreen && <hr className='mt-0'></hr> }
      <div className='px-5'>
      {isBigScreen && <HomeSecondSection />}
      </div>
      {isSmallScreen && <HomeSecondSectionMobile />}
      <div className='px-5'>
      {isBigScreen && <HomeThirdSection />}
      </div>
      {isSmallScreen && <HomeThirdSectionMobile/>}
      <div className='px-5'>
      {isBigScreen &&  <HomeFourthSection />}
      </div>
      {isSmallScreen && <HomeFourthSectionMobile/>}
      <div style={caterbg}>
      <div className='px-5'>
      {isBigScreen && <HomeFifthSection />}
      </div>
      {isSmallScreen && <HomeFifthSectionMobile />}
      </div>
      <div className='px-5'>
        <HomeSixthSection />
        <HomeSeventhSection />
      </div>
      <div style={caterbg}>
        <HomeEightthSection />
      </div>
      <div className='row container-fluid mx-0 py-5' style={{backgroundImage: `url(${contactbackground})`}}>
        <div class="col-md-8 my-auto">
          <div class="mx-5 px-5">
            <h1 class="text-white mx-5 px-5" style={{lineHeight:`4rem`}}>Let’s Transform Your Workforce Together</h1>
            
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
