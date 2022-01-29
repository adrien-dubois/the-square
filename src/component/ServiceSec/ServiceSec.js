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
    const br = `\n`;
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
                topic="Started from the Bottom"
                title="Du site vitrine à l'E-Commerce, en passant par le Sur-Mesure"
                subText={'Nous sommes là pour vous accompagner et vous proposer un site répondant à toutes les normes actuelles en matière d’ergonomie, de design et technologie, comme le "responsive design" permettant à votre site de s’adapter à n’importe quelle résolution d’écran.\nNous prenons en charge intégralement votre site internet du dépôt du nom de domaine à la mise en ligne. Notre but est la création d’un site unique dont l’esthétique valorise votre image comme vos produits.'}
                
            />
            <SvgBlock svg="landing.svg"/>
        </Content>

        <Content>
            <SvgBlock svg="scrum.svg"/>
            <TextBlock
                start
                titleRight
                subRight
                topic="No scrums"
                title="Une méthodologie vous plaçant au coeur de votre projet"
                subText={`Notre collectif utilise la méthode Agile: SCRUM.\n C'est une pratique qui mets en avant la collaboration entre notre équipe et le client, centrée sur l'humain et la communication, ce qui apporte une approche plus pragmatique, qui encourage une flexibilité au changement en cours de projet afin de s'adapter à votre vision. Vous devenez vous aussi acteur du développement de votre propre site web, et nous sommes sûr d'être au plus proche de vos désirs.`}
            />
            
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