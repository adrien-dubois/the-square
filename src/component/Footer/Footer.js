import React from 'react';
import NavButton from '../NavButton/NavButton';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import { 
    FooterContainer, 
    LeftText, 
    RightText
} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
        <LeftText>
            ©2022 made with ❤ <span>by The Square.</span>
        </LeftText>
        <NavButton left={"/"} right={"/project-1"} />
        <RightText>
            Suivez nous sur nos réseaux
            <SocialNetwork/>
        </RightText>
    </FooterContainer>
  );
};

export default Footer;
