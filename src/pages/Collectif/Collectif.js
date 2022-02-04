import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react';
import AboutSec from '../../component/AboutSec/AboutSec';
import Footer from '../../component/Footer/Footer';
import HeroSec from '../../component/HeroSec/HeroSec';
import Navigation from '../../component/Navigation/Navigation';
import Services from '../../component/ServiceSec/ServiceSec';
import TeamSec from '../../component/TeamSec/TeamSec';
import Logo from '../../subcomponent/Logo';
import ScrollToTop from '../../subcomponent/ScrollToTop';
import { Collective } from './Collectif.elements';


const Collectif = () => {  
  return (
    <Collective>
      <Navigation />
      <Logo />
      <HeroSec />
      <AboutSec />
      <Services />
      <TeamSec />
      <Footer />
      <ScrollToTop />
    </Collective>
  );
};

export default Collectif;
