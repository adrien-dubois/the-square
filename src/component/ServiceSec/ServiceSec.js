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
                start="true"
                titleRight
                subRight
                topic="No scrums"
                title="Une méthodologie vous plaçant au coeur de votre projet"
                subText={`Notre collectif utilise la méthode Agile: SCRUM.\n C'est une pratique qui mets en avant la collaboration entre notre équipe et le client, centrée sur l'humain et la communication, ce qui apporte une approche plus pragmatique, qui encourage une flexibilité au changement en cours de projet afin de s'adapter à votre vision. Vous devenez vous aussi acteur du développement de votre propre site web, et nous sommes sûr d'être au plus proche de vos désirs.`}
            />
            
        </Content>

        <Content>
            <TextBlock
                topic="Reunited"
                title="Une équipe sur-mesure, de multiples compétences, un interlocuteur unique"
                subText={`Nous avons un jour décidé d'assembler nos forces, car nous sommes partis du constat que nous avons des profils complémentaires, et qu'en formant une équipe de manière collaborative, proactive et efficace, nous pouvions former une équipe talentueuse pour répondre à des projets bien plus ambitieux. \nEt vous y trouvez aussi votre compte. En adoptant la méthode Agile nous travaillons comme une agence, avec la rapidité et le process d'une agence, mais avec les avantages des Freelance, sans avoir à en engager plusieurs.`}
            />
            <SvgBlock svg="meeting.svg"/>
        </Content>

    </ServiceSection>
 );
};

export default ServiceSec;
