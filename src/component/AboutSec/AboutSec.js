import React from 'react';
import wave from "../../assets/img/wave.svg";
import { 
    AboutSection, 
    AboutText, 
    Astronaut, 
    Circle, 
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
  return (
    <AboutSection>
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
                    <Text>
                        Fugiat aute elit laborum adipisicing qui id aliqua do est dolor. Enim laboris in tempor occaecat fugiat eiusmod. Pariatur exercitation minim quis id proident nisi duis ut minim. Ipsum irure ullamco sunt adipisicing nulla aliqua nostrud magna veniam mollit. Deserunt proident excepteur nostrud magna consectetur in quis sunt do. Pariatur ex aliqua incididunt qui adipisicing sit voluptate id.
                    </Text>
                    <div>
                        <Circle />
                        <Circle />
                        <Circle />
                    </div>
                </AboutText>
            </Content>
        </Main>
    </AboutSection>
  );
};

export default AboutSec;
