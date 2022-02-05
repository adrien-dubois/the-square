import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';
import React from 'react';
import { 
  Marker,
  NavProjects, 
  ProjectsContainer, 
  ProjectSection, 
  SectionPart, 
  TimelineLink
} from './Projects.elements';


const Projects = () => {

  gsap.registerPlugin(ScrollTrigger, Draggable)

  const navLinks = gsap.utils.toArray('[data-link]');
  const lastItemWidth = () => navLinks[navLinks.length - 1].offsetWidth;
  const getDraggableWidth = () => {
    return (track.offsetWidth * 0.5) - lastItemWidth()
  }

  // now calculate x value in interpolation
  const track = document.querySelector('[data-draggable]');

  // create now the Timeline
  const tl = gsap.timeline()
    .to(track, {
      x : () => {
        return ((track.offsetWidth * 0.5) - lastItemWidth()) * -1
      },
      ease: 'none'
    })

    // create scroll trigger instance
    const st = ScrollTrigger.create({
      animation: tl,
      scrub: 0, 
    })

    // and then create draggable instance
    const draggableInstance = Draggable.create(track, {
      type: 'x',
      bounds: {
        minX: 0,
        maxX: getDraggableWidth() * -1,
      },
      edgeResistance: 1, // not allow any dragging beyond the bounds
      onDragStart: () => st.disable(),
      onDragEnd: () => st.enable(),
    })

  return (
    <ProjectsContainer>
      <NavProjects>
        
        {/* position on the timeline */}
        <Marker></Marker>
        
        {/* draggable element */}
        <div className="nav__track" data-draggable>
            <ul className="nav__list">
                <li>
                    <TimelineLink href="#section_1" className='nav__link' data-link><span>Site Vitrine</span></TimelineLink>
                </li>
                <li>
                    <TimelineLink href="#section_2" className='nav__link' data-link><span>Foodtruck</span></TimelineLink>
                </li>
                <li>
                    <TimelineLink href="#section_3" className='nav__link' data-link><span>E-Commerce</span></TimelineLink>
                </li>
                <li>
                    <TimelineLink href="#section_4" className='nav__link' data-link><span>Blog</span></TimelineLink>
                </li>
            </ul>
        </div>
    </NavProjects>

    <SectionPart>
      <ProjectSection id="section_1" style={{'--i': 0}} ></ProjectSection>
      <ProjectSection id="section_2" style={{'--i': 1}} ></ProjectSection>
      <ProjectSection id="section_3" style={{'--i': 2}} ></ProjectSection>
      <ProjectSection id="section_4" style={{'--i': 3}} ></ProjectSection>
    </SectionPart>
    </ProjectsContainer>
  );
};

export default Projects;


