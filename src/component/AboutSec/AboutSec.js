import React from 'react';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import wave from "../../assets/img/wave.svg";
import { 
    AboutSection, 
    AboutText, 
    Astronaut, 
    Caroussel, 
    Content, 
    CurvedLine, 
    Main, 
    Rocket, 
    Text, 
    Title, 
    Waves 
} from './AboutSec.elements';
import rocket from '../../assets/img/rocket.svg';
import astronaut from '../../assets/img/astronaut.svg';

const AboutSec = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <AboutSection id="about">
        <Waves src={wave} alt="waves" />
        <Main>
            <div>
                <Title>Le Collectif</Title>
                <CurvedLine />
            </div>
            <Content>
                <Rocket>
                    <img src={rocket} alt='Rocket' width='400' height='400' /> 
                </Rocket>
                <AboutText>
                    <Astronaut>
                    <img src={astronaut} alt='Astronaut' width='300' height='300' />
                    </Astronaut>
                    <Caroussel>
                        <Slider {...settings}>
                            <Text>
                                Fugiat aute elit laborum adipisicing qui id aliqua do est dolor. Enim laboris in tempor occaecat fugiat eiusmod. Pariatur exercitation minim quis id proident nisi duis ut minim. Ipsum irure ullamco sunt adipisicing nulla aliqua nostrud magna veniam mollit. Deserunt proident excepteur nostrud magna consectetur in quis sunt do. Pariatur ex aliqua incididunt qui adipisicing sit voluptate id.
                            </Text>
                            <Text>
                                Fugiat aute elit laborum adipisicing qui id aliqua do est dolor. Enim laboris in tempor occaecat fugiat eiusmod. Pariatur exercitation minim quis id proident nisi duis ut minim. Ipsum irure ullamco sunt adipisicing nulla aliqua nostrud magna veniam mollit. Deserunt proident excepteur nostrud magna consectetur in quis sunt do. Pariatur ex aliqua incididunt qui adipisicing sit voluptate id.
                            </Text>
                            <Text>
                                Fugiat aute elit laborum adipisicing qui id aliqua do est dolor. Enim laboris in tempor occaecat fugiat eiusmod. Pariatur exercitation minim quis id proident nisi duis ut minim. Ipsum irure ullamco sunt adipisicing nulla aliqua nostrud magna veniam mollit. Deserunt proident excepteur nostrud magna consectetur in quis sunt do. Pariatur ex aliqua incididunt qui adipisicing sit voluptate id.
                            </Text>
                        </Slider>
                    </Caroussel>
                    
                </AboutText>
            </Content>
        </Main>
    </AboutSection>
  );
};

export default AboutSec;