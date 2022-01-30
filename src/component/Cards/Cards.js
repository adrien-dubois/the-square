import React from 'react';
import { 
    CARD, 
    ContactButton, 
    Divider, 
    Image,
    Info,
    Name,
    Subtitle,
    Text
} from './Cards.elements';

const Cards = ({name, subtitle, text, image, email}) => {
    const Avatar = require(`../../assets/img/avatar/${image}.jpg`);
  return (
    <CARD>
        <Info>
            <Name>{name}</Name>
            <Subtitle>{subtitle}</Subtitle>
            <Divider></Divider>
            <Text>{text}</Text>
            <ContactButton><a href={`mailto: ${email}`}>Contact</a></ContactButton>
        </Info>
            <Image img={Avatar} />
    </CARD>
  );
};

export default Cards;
