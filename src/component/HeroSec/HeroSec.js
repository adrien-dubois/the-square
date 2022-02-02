import React from 'react';
import { 
  CTA,
  HeroSection, 
  LeftBlock, 
  MainContent,
  Square,
  SubText,
  TeamSvg,
  Title,
  Topic
} from './HeroSec.elements';
import ArrowSvg from '../../assets/img/Arrow Right.svg';
import Team from '../../assets/img/team.svg';


const HeroSec = () => {
  return (
    <HeroSection id="home">
        <MainContent>
          <LeftBlock>
            <Topic>
              <Square /> <span>The Square.</span>
            </Topic>
            <Title>Qui sommes-nous?</Title>
            <SubText>Mollit et occaecat nulla occaecat velit velit aute commodo Tempor minim dolore esse ut duis ipsum proident sint magna occaecat Lorem. Incididunt fugiat anim ea eiusmod veniam commodo sunt sunt incididunt culpa mollit aute sint ad. Sit et quis esse officia.</SubText>
            <CTA>
              Prenez rendez-vous &nbsp; <img src={ArrowSvg} width="100" height="100" alt='CTA' />
            </CTA>
          </LeftBlock>
          <TeamSvg src={Team} alt="Team" width="400" height="400" />
        </MainContent>
      </HeroSection>
  );
};

export default HeroSec;