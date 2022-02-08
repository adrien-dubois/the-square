import gsap, { Power1, TimelineMax } from 'gsap';
import React, { Component } from 'react';
import {FaArrowUp} from 'react-icons/fa';
import { 
    ArrowUp,
    MenuWrapper,
    NavigationContainer, 
    NavPortfolio, 
    NavProjects, 
    StyledNavLink,
    SubNav
} from './Navigation.elements';

export default class Navigation extends Component {
    componentDidMount(){

        var el = document.getElementById('navigate');

        var tl = new TimelineMax({paused: true});

        tl
        .set(el,{willChange:"transform"})
        .to(el, 1, {transform:"translateY(0)", ease: Power1.easeInOut});

        el.animation = tl;
        el.addEventListener("mouseenter", function(){
            this.animation.play();
        });
        el.addEventListener("mouseleave", function(){
            this.animation.reverse();
        });
    }
  render() {
    return ( 
            <NavigationContainer id="navigate" className='navigation'>
                <ul>
                    {/* LINKS */}
                    <StyledNavLink  to="/">
                        <li>accueil</li>
                    </StyledNavLink>
                    <StyledNavLink  to="/collectif">
                        <li>le collectif</li>
                    </StyledNavLink>
                    <StyledNavLink  to="/projects">
                        <li>nos projets</li>
                    </StyledNavLink>
                    <StyledNavLink to="/contact" >
                        <li>contact</li>
                    </StyledNavLink>

                    {/* MENU ARROW */}
                    <MenuWrapper id='wrapper'>
                        <ArrowUp>
                            <FaArrowUp/>
                        </ArrowUp>
                        <SubNav>menu</SubNav>
                    </MenuWrapper>   
                                     
                </ul>
            </NavigationContainer>
    );
  }
}


