import React from 'react';
import { 
    CARD, 
    Image,
    Name,
    Subtitle,
    Text
} from './Cards.elements';

const Cards = ({name, subtitle, text, image}) => {
    const Avatar = require(`../../assets/img/avatar/${image}.jpg`).default;
  return (
    <CARD>
        <Image img={Avatar} />
        <Name>{name}</Name>
        <Subtitle>{subtitle}</Subtitle>
        <Text>{text}</Text>
    </CARD>
  );
};

export default Cards;
