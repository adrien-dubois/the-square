import React from 'react';
import AboutSec from '../../component/AboutSec/AboutSec';
import HeroSec from '../../component/HeroSec/HeroSec';
import Navigation from '../../component/Navigation/Navigation';
import ServiceSec from '../../component/ServiceSec/ServiceSec';
import TeamSec from '../../component/TeamSec/TeamSec';
import Logo from '../../subcomponent/Logo';
import { Collective } from './Collectif.elements';


const Collectif = () => {
  return (
    <Collective>
      <Navigation />
      <Logo />
      <HeroSec />
      <AboutSec />
      <ServiceSec />
      <TeamSec />
    </Collective>
  );
};

export default Collectif;
