import React from 'react';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import { 
    Carousel,
    TeamSection, 
    Title 
} from './TeamSec.elements';
import Cards from '../Cards/Cards';

const TeamSec = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <TeamSection id="team">
        <Title>Les membres</Title>
        <Carousel>
            <Slider {...settings}>
                
                <Cards
                    text="Sit id exercitation enim ipsum voluptate esse laborum sunt esse quis sint. Incididunt magna sunt amet commodo laborum tempor sint quis occaecat fugiat mollit qui fugiat incididunt. "
                    name="Gaëlle Ruf"
                    subtitle="Tech Lead"
                    image="gaelle"
                    email="gaelle@the-square.net"
                />
                
                <Cards
                    text="Sit id exercitation enim ipsum voluptate esse laborum sunt esse quis sint. Incididunt magna sunt amet commodo laborum tempor sint quis occaecat fugiat mollit qui fugiat incididunt. "
                    name="Nathan Guyard"
                    subtitle="Responsable commercial"
                    image="nathan"
                    email="nathan@the-square.net"
                />
                
                <Cards
                    text="Sit id exercitation enim ipsum voluptate esse laborum sunt esse quis sint. Incididunt magna sunt amet commodo laborum tempor sint quis occaecat fugiat mollit qui fugiat incididunt. "
                    name="Mehdi Mosteghami"
                    subtitle="Scrum Master"
                    image="mehdi"
                    email="mehdi@the-square.net"
                />
                
                <Cards
                    text="Sit id exercitation enim ipsum voluptate esse laborum sunt esse quis sint. Incididunt magna sunt amet commodo laborum tempor sint quis occaecat fugiat mollit qui fugiat incididunt. "
                    name="Adrien Dubois"
                    subtitle="Développeur / Webdesigner"
                    image="adrien"
                    email="adrien@the-square.net"
                />
            </Slider>
        </Carousel>
    </TeamSection>
 );
};

export default TeamSec;

