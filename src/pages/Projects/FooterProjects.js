import React from 'react';
import { 
    FooterContainer, 
    LeftText, 
    RightText 
} from '../../component/Footer/Footer.elements';
import NavButton from '../../component/NavButton/NavButton';
import SocialNetwork from '../../component/SocialNetwork/SocialNetwork';


const FooterProject = () => {
  return (
    <FooterContainer>
        <LeftText>
            ©2022 made with ❤ <span>by The Square.</span>
        </LeftText>
        <NavButton left={"/collectif"} right={"/contact"} />
        <RightText>
            Suivez nous sur nos réseaux
            <SocialNetwork/>
        </RightText>
    </FooterContainer>
  );
};

export default FooterProject;
