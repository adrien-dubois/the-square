import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';
import lodashThrottle from "https://cdn.skypack.dev/lodash.throttle@4.1.1";
import React, { Component } from 'react';
import { 
  Marker,
  NavProjects, 
  ProjectsContainer, 
  ProjectSection, 
  SectionPart, 
  TimelineLink
} from './Projects.elements';
import SectionProject from '../../subcomponent/SectionProject/SectionProject';

export default class Projects extends Component {
  componentDidMount(){

    // register plugins
    gsap.registerPlugin(ScrollTrigger, Draggable);
  
    // Get the track marker & the links
    const track = document.querySelector('[data-draggable]');
    const navLinks = gsap.utils.toArray('[data-link]');
    
    // This to use the width of the last nav item 
    const lastItemWidth = () => navLinks[navLinks.length - 1].offsetWidth;
  
    // get the offset position of draggable element
    // also need to know the total scrollable height of the page
    const getUseableHeight = () => document.documentElement.offsetHeight - window.innerHeight;
  
    // calculate the total values the element can be dragged
    const getDraggableWidth = () => {
      return ((track.offsetWidth / 2) - lastItemWidth());
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
     
    // now calculate x value in interpolation
    const tl = gsap.timeline()
    .to(track, {
      x: () => getDraggableWidth() * -1,
      ease: 'none'
    })

    // Create the Scroll Trigger instance , which will trigger the timeline animation
    const st = ScrollTrigger.create({
      animation: tl,
      scrub: 0,
    })
    
    // Now we’ll create a Draggable instance
    const draggableInstance = Draggable.create(track, {
      type: 'x',

      // set the bounds, otherwise the element could be dragged right off the screen
      bounds: {
        minX: 0,
        maxX: getDraggableWidth() * -1
      },
      edgeResistance: 1,
      onDragStart: () => st.disable(),
      onDragEnd: () => st.enable(),
      onDrag: () => {
        const left = track.getBoundingClientRect().left * -1
        const width = getDraggableWidth()
        const useableHeight = getUseableHeight()
        const y = gsap.utils.mapRange(0, width, 0, useableHeight, left)
        
        st.scroll(y);
      }
    })

    const initSectionAnimation = () => {
      // Do nothing if user prefers reduced motion 
      if (prefersReducedMotion.matches) return ;
    }

    // Allow navigation via keyboard 
    track.addEventListener('keyup', (e) => {
      const id = e.target.getAttribute('href')
      if (!id || e.key !== 'Tab') return
      
      const section = document.querySelector(id)
      const y = section.getBoundingClientRect().top + window.scrollY
      
      st.scroll(y)
    })

  }
  
  render() {
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

        <ProjectSection className='section' id="section_1" style={{'--i': 0}} >
          <SectionProject projectNumber={0} />
        </ProjectSection>

        <ProjectSection className='section' id="section_2" style={{'--i': 1}} >
          <SectionProject projectNumber={1} />
        </ProjectSection>

        <ProjectSection className='section' id="section_3" style={{'--i': 2}} >

        </ProjectSection>

        <ProjectSection className='section' id="section_4" style={{'--i': 3}} >

        </ProjectSection>

      </SectionPart>
    </ProjectsContainer>
    );
  }
}
