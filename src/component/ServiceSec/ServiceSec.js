import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
    Background, 
    Content, 
    Line, 
    OBJ, 
    ServiceSection, 
    Title,
    Triangle,
} from '../TeamSec/ServiceSec.elements';
import TextBlock from '../TextBlock/TextBlock';
import SvgBlock from '../SvgBlock/SvgBlock';
import caps from "../../assets/img/3dcapsule.png";


const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

   
  
    useEffect(() => {
      const element = ref.current;
      ////
      // const mq = window.matchMedia("(max-width: 48em)");

    
      // TIMELINE CREATE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.getElementById("services"),
          start: "top top+=100",
          end: "bottom bottom",
          pin: element,
          pinReparent: true,
          // markers: true,
        },
      });

      // ARROW ANIMATION
      const line = document.getElementById("line")
      tl.fromTo(line,
        {
          height: "15rem",
        },
        {
          height: "3rem",
          duration: 2,
          scrollTrigger: {
            trigger: line,
            start: "top top+=200",
            end: "bottom top+=220",
            scrub: true,
          },
        }
      );
  
      revealRefs.current.forEach((el, index) => {
        // console.log(el.childNodes);
        
          tl.from(el.childNodes[0],
  
            {
              x: -300,
              opacity: 0,
              duration: 2,
              ease: "power2",

              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=300",
                scrub: true,
                snap: true,
                // markers:true
                //
                // toggleActions: "play none none reverse",
              },
            })

            .to(el.childNodes[1], {
              transform: "scale(0)",
              duration: 2,
              ease: "power2.inOut",
  
              scrollTrigger: {
                trigger: el.childNodes[1],
                id: `section-${index + 1}`,
                start: "top center",
                end: "bottom center",
                scrub: true,
                snap: true,
  
                // toggleActions: "play none none reverse",
              },
            })
            .from(el.childNodes[2],
  
              {
                y: 400,
                duration: 2,
                ease: "power2",

                scrollTrigger: {
                  trigger: el,
                  id: `section-${index + 1}`,
                  start: "top center+=100",
                  end: "bottom bottom-=200",
                  scrub: true,
                  snap: true,
                  //
                  // toggleActions: "play none none reverse",
                },
              })

            .to(el,
  
              {
                opacity: 0,
  
                ease: "power2",
                scrollTrigger: {
                  id: `section-${index + 1}`,
                  trigger: el,
                  start: "top top+=200",
                  end: "center top+=300",
                  scrub: true,
                },
              });
            
      });
    }, []);

    const addToRefs = (el) => {
      if(el && !revealRefs.current.includes(el) ) {
        revealRefs.current.push(el);
      }
    };

  return (
    <ServiceSection id="services">
        <Background ref={ref}>
            <Title className="title">Nos Services</Title>
            <Line id="line" />
            <Triangle id="triangle" />
        </Background>

        <Content ref={addToRefs}>
            <TextBlock
                topic="Started from the Bottom"
                title={<h1>Du site vitrine à l'E-Commerce, en passant par le Sur-Mesure</h1>}
                subText={
                <h5>Nous sommes là pour vous accompagner et vous proposer un site répondant à toutes les normes actuelles en matière d’ergonomie, de design et technologie, comme le "responsive design" permettant à votre site de s’adapter à n’importe quelle résolution d’écran.<br/>
                Nous prenons en charge intégralement votre site internet du dépôt du nom de domaine à la mise en ligne. Notre but est la création d’un site unique dont l’esthétique valorise votre image comme vos produits.</h5>}
                
            />
            <OBJ>
              <img src={caps} alt='caps' width='400' height='400' />
            </OBJ>
            <SvgBlock svg="landing.svg"/>
        </Content >

        <Content ref={addToRefs}>
            <SvgBlock svg="scrum.svg"/>
            <OBJ>
              <img src={caps} alt='caps' width='400' height='400' />
            </OBJ>
            <TextBlock
                start="true"
                titleRight
                subRight
                topic="No scrums"
                title={<h1>Une méthodologie vous plaçant au coeur de votre projet</h1>}
                subText={
                <h5>Notre collectif utilise la méthode Agile: SCRUM.\n C'est une pratique qui mets en avant la collaboration entre notre équipe et le client, centrée sur l'humain et la communication, ce qui apporte une approche plus pragmatique, qui encourage une flexibilité au changement en cours de projet afin de s'adapter à votre vision. Vous devenez vous aussi acteur du développement de votre propre site web, et nous sommes sûr d'être au plus proche de vos désirs.</h5>}
            />
            
        </Content>

        <Content>
            <TextBlock
                topic="Reunited"
                title={<h1>Une équipe sur-mesure, de multiples compétences, un interlocuteur unique</h1>}
                subText={
                <h5>Nous avons un jour décidé d'assembler nos forces, car nous sommes partis du constat que nous avons des profils complémentaires, et qu'en formant une équipe de manière collaborative, proactive et efficace, nous pouvions former une équipe talentueuse pour répondre à des projets bien plus ambitieux. <br/> 
                Et vous y trouvez aussi votre compte. En adoptant la méthode Agile nous travaillons comme une agence, avec la rapidité et le process d'une agence, mais avec les avantages des Freelance, sans avoir à en engager plusieurs.</h5>}
            />
            <OBJ>
              <img src={caps} alt='caps' width='400' height='400' />
            </OBJ>
            <SvgBlock svg="meeting.svg"/>
        </Content>

    </ServiceSection>
 );
};

export default Services;
