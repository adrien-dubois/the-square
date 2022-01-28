import React from 'react';
import { 
    Background, 
    Content, 
    CurvedLine, 
    Line, 
    ScrollContainer, 
    ServiceSection, 
    Title,
    Triangle,
} from './ServiceSec.elements';
import { ScrollIcon } from '../../subcomponent/SvgComponent';
import TextBlock from '../TextBlock/TextBlock';
import SvgBlock from '../SvgBlock/SvgBlock';

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
            <TextBlock
                topic="Sites Vitrines"
                title="Un site vitrine selon vos besoins pour votre commerce"
                subText="Id voluptate ex qui officia. Minim enim velit ad ullamco Lorem nisi aliquip do aliquip."
            />
            <SvgBlock svg="landing.svg"/>
        </Content>

        <Content>
            <TextBlock
                topic="Sites Vitrines"
                title="Un site vitrine selon vos besoins pour votre commerce"
                subText="Id voluptate ex qui officia. Minim enim velit ad ullamco Lorem nisi aliquip do aliquip."
            />
            <SvgBlock svg="landing.svg"/>
        </Content>

        <Content>
            <TextBlock
                topic="Sites Vitrines"
                title="Un site vitrine selon vos besoins pour votre commerce"
                subText="Id voluptate ex qui officia. Minim enim velit ad ullamco Lorem nisi aliquip do aliquip."
            />
            <SvgBlock svg="landing.svg"/>
        </Content>

    </ServiceSection>
 );
};

export default ServiceSec;
