import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { 
    Background, 
    Content, 
    Line, 
    OBJ, 
    ServiceSection, 
    Title,
    Triangle,
} from './ServiceSec.elements';
import TextBlock from '../TextBlock/TextBlock';
import SvgBlock from '../SvgBlock/SvgBlock';
import caps from "../../assets/img/3dcapsule.png";


const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el) ) {
      revealRefs.current.push(el);
    }
  };
    useEffect(() => {
      const element = ref.current;
      const mq = window.matchMedia("(max-width: 48em)");

    
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
        if (mq.matches) {
          tl.from(
            el.childNodes[0],
      
            {
              x: -300,
              opacity: 0,
              duration: 2,
      
              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=200",
                end: "bottom bottom-=100",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
            .to(el.childNodes[1], {
              transform: "scale(0)",
      
              ease: "power2.inOut",
      
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el.childNodes[1],
                start: "top center",
                end: "bottom center",
                scrub: true,
                snap: true,
      
                // toggleActions: "play none none reverse",
              },
            })
            .from(
              el.childNodes[2],
      
              {
                y: 400,
      
                duration: 2,
      
                ease: "power2",
                scrollTrigger: {
                  id: `section-${index + 1}`,
                  trigger: el,
                  start: "top center+=100",
                  end: "bottom bottom-=200",
                  scrub: true,
                  snap: true,
                  //
                  // toggleActions: "play none none reverse",
                },
              }
            )
            .to(
              el,
      
              {
                opacity: 0,
      
                ease: "power2",
                scrollTrigger: {
                  id: `section-${index + 1}`,
                  trigger: el,
                  start: "top top+=300",
                  end: "center top+=300",
                  scrub: true,
                },
              }
            );
        } else {
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
        }
         
      });
      

      setTimeout(() => {
        ScrollTrigger.refresh();
        console.log("scrolltrigger refresh!");
      }, 1000);

    }, []);

    

  return (
    <ServiceSection id="services">
      <div>
        <Background ref={ref}>
            <Title className="title">Nos Services</Title>
            <Line id="line" />
            <Triangle id="triangle" />
        </Background>
      </div>
           
        <Content ref={addToRefs}>
            <TextBlock
                topic="Started from the Bottom"
                title={<h1>Du site vitrine ?? l'E-Commerce, en passant par le Sur-Mesure</h1>}
                subText={
                <h5>Nous sommes l?? pour vous accompagner et vous proposer un site r??pondant ?? toutes les normes actuelles en mati??re d???ergonomie, de design et technologie, comme le "responsive design" permettant ?? votre site de s???adapter ?? n???importe quelle r??solution d?????cran.<br/>
                Nous prenons en charge int??gralement votre site internet du d??p??t du nom de domaine ?? la mise en ligne. Notre but est la cr??ation d???un site unique dont l???esth??tique valorise votre image comme vos produits.</h5>}
                
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
                title={<h1>Une m??thodologie vous pla??ant au coeur de votre projet</h1>}
                subText={
                <h5>Notre collectif utilise la m??thode Agile: SCRUM.\n C'est une pratique qui mets en avant la collaboration entre notre ??quipe et le client, centr??e sur l'humain et la communication, ce qui apporte une approche plus pragmatique, qui encourage une flexibilit?? au changement en cours de projet afin de s'adapter ?? votre vision. Vous devenez vous aussi acteur du d??veloppement de votre propre site web, et nous sommes s??r d'??tre au plus proche de vos d??sirs.</h5>}
            />
            
        </Content>

        
        <Content>
            <TextBlock
                topic="Reunited"
                title={<h1>Une ??quipe sur-mesure, de multiples comp??tences, un interlocuteur unique</h1>}
                subText={
                <h5>Nous avons un jour d??cid?? d'assembler nos forces, car nous sommes partis du constat que nous avons des profils compl??mentaires, et qu'en formant une ??quipe de mani??re collaborative, proactive et efficace, nous pouvions former une ??quipe talentueuse pour r??pondre ?? des projets bien plus ambitieux. <br/> 
                Et vous y trouvez aussi votre compte. En adoptant la m??thode Agile nous travaillons comme une agence, avec la rapidit?? et le process d'une agence, mais avec les avantages des Freelance, sans avoir ?? en engager plusieurs.</h5>}
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
