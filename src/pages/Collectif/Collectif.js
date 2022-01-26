import React from 'react';
import Navigation from '../../component/Navigation/Navigation';
import Logo from '../../subcomponent/Logo';
import { 
  Circle,
  Collective, 
  CTA, 
  HeroSection, 
  LeftBlock, 
  MainContent,
  SubText,
  Title,
  Topic
} from './Collectif.elements';
import { ArrowSvg } from '../../subcomponent/SvgComponent';

const Collectif = () => {
  return (
    <Collective>
      <Navigation />
      <Logo />
      <HeroSection>
        <MainContent>
          <LeftBlock>
            <Topic>
              <Circle /> <span>Collectif Freelance</span>
            </Topic>
            <Title>Transformez votre présence digitale</Title>
            <SubText>Mollit et occaecat nulla occaecat velit velit aute commodo Tempor minim dolore esse ut duis ipsum proident sint magna occaecat Lorem.</SubText>
            <CTA>
              Prenez rendez-vous &nbsp; <ArrowSvg width="400" height="400" />
            </CTA>
          </LeftBlock>
        </MainContent>
      </HeroSection>
    </Collective>
  );
};

export default Collectif;
