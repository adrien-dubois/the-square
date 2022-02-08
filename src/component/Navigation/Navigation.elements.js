import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const move = keyframes`
  0% { transform:translateY(-3px); }
  50% { transform:translateY(6px); }
  100% { transform:translateY(-3px); }
`;

export const NavigationContainer = styled.div`
    
    position: fixed;
    top: 1rem;
    left: 1.4rem;
    font-size: 1.4rem;
    line-height: 28px;
    color: var(--teal-blue);

    &:before {
    content: '';
    position: absolute;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background: var(--blanc-casse);
    top: -124px;
    left: -178px;
    z-index: -1;    

        @media only Screen and (max-width: 430px){
            height: 50px;
            width: 50px;
        }
    }
    ul:hover li:not(:hover) {
        opacity: .5;
    }
    ul:hover li:hover {
        color: var(--color-2);
    }

    &:hover{
        #wrapper{
            visibility: hidden;
            opacity: 0;
        }
    }
    
`;

export const StyledNavLink = styled(NavLink)`

    &.active {
        color: var(--color-2);
    }
`;

export const NavProjects = styled.ul`
    position: absolute;
    visibility: hidden;
    opacity: 0;
    padding: 0 40px;
    width: 300px;
    transform: translateX(70px);
    transition: .3s ;
    perspective: 500px;

    li {
        transform: rotatey(30deg) scaleX(1.2);
        transform-origin: center;
        transition: .3s;
    }
`;

export const NavPortfolio = styled.li`
    cursor: pointer;
    display: flex;
    transition: .5s;

    &:hover ${NavProjects},
    ${NavProjects}:hover &{
      visibility: visible;
      opacity: 1;

      li {
        transform: rotatey(0deg)
      }
    }
`;

export const SubNav = styled.p`
    color: var(--teal-blue);
    position: absolute;
    left: 70%;
    bottom: -50%;
`;

export const ArrowUp = styled.div`
    position: absolute;
    bottom: 0;
    bottom: -27%;
    left: 90%;
    animation: ${move} 2.5s ease infinite;
`;

export const MenuWrapper = styled.div`
    visibility: visible;
    opacity: 1;
    transition: visibility .7s, opacity .7s linear;
`;