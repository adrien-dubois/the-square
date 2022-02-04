import React from 'react';
import { 
    NavigationContainer, 
    NavPortfolio, 
    NavProjects, 
    StyledNavLink
} from './Navigation.elements';

const Navigation = () => {
    
  return (
    <NavigationContainer className='navigation'>
        <ul>
            <StyledNavLink  to="/">
                <li>accueil</li>
            </StyledNavLink>
            <StyledNavLink  to="/collectif">
                <li>le collectif</li>
            </StyledNavLink>

            <NavPortfolio>portfolio
                <NavProjects className='nav-projects'>
                    <StyledNavLink to="/portfolio">
                        <li>site vitrine</li>
                    </StyledNavLink>
                    <StyledNavLink to="/portfolio">
                        <li>foodtruck</li>
                    </StyledNavLink>
                    <StyledNavLink to="/portfolio">
                        <li>e-commerce</li>
                    </StyledNavLink>
                </NavProjects>
            </NavPortfolio>

            <StyledNavLink to="/contact" >
                <li>contact</li>
            </StyledNavLink>
        </ul>
    </NavigationContainer>
 );
};

export default Navigation;
