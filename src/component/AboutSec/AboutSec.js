import React from 'react';
import wave from "../../assets/img/wave.svg";
import { 
    AboutSection, 
    Waves 
} from './AboutSec.elements';

const AboutSec = () => {
  return (
    <AboutSection>
        <Waves src={wave} alt="waves" />
    </AboutSection>
  );
};

export default AboutSec;
