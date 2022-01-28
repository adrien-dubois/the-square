import React from 'react';
import { 
    Background, 
    CurvedLine, 
    Line, 
    ScrollContainer, 
    ServiceSection, 
    Title,
    Triangle,
} from './ServiceSec.elements';
import { ScrollIcon } from '../../subcomponent/SvgComponent';

const ServiceSec = () => {
  return (
    <ServiceSection>
        <Background>
            <div>
                <Title>Nos Services</Title>
                <CurvedLine/>
            </div>
            <ScrollContainer>
                <ScrollIcon width={70} height={70} fill="var(--blanc-casse)" />
            </ScrollContainer>
            <Line/>
            <Triangle/>
        </Background>

        <Content>
            <TextBlock></TextBlock>
        </Content>

    </ServiceSection>
 );
};

export default ServiceSec;
