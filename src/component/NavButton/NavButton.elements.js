import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NBMain = styled.div`
    display: grid;
    grid-template-columns: 20px 100px 20px;
    grid-template-areas: 'a b c';
    align-items: center;
    justify-items: center;
    width: 150px;
    transition: 0.4s;
    transform: rotateX(25deg) scaleY(0.8);
    transform-origin: bottom;
    pointer-events: none;

    @media screen and (max-width: 430px){
      transform: rotateX(0deg) scaleY(1);
      width: 50px;
    }

    &:hover {
      transform: rotateX(0deg) scaleY(1);
    }
`;

export const NavButtonContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--teal-blue);
  font-size: 1.7rem;
  perspective: 40px;

  &:hover ${NBMain} {
    pointer-events: auto;
  }
`;


export const NBLink = styled(NavLink)`
    .left,
    .right {
      @media screen and (max-width: 430px){
        transform: scale(2);
      }
    }
    .left {
      grid-area: a;
    }
    p {
      grid-area: b;

      @media screen and (max-width: 430px){
        display: none;
      }
    }
    .right {
      grid-area: c;
    }

    

`;

export const Arrow = styled.span`
    font-size: 1.5rem;
    padding: 0 1rem;
    transition: 0.3s;
    display: inline-block;
    transform: translateY(-1px);

    &:hover {
        color: var(--blanc-casse);
        font-size: 1.8rem;
    }
`;