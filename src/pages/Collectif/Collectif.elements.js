import styled from "styled-components";

export const Collective = styled.div`
  /* position: absolute; */
  /* height: 100vh;
  width: 100vw; */

  &:after {
    content: "";
    height: 340px;
    width: 340px;
    border: 1px solid var(--blanc-casse);
    border-radius: 50%;
    position: absolute;
    bottom: -200px;
    left: -80px;
    z-index: -1;

    @media screen and (max-width: 810px){
      height: 200px;
      width: 200px;
      bottom: -110px;
    }
    @media screen and (max-width: 430px){
      left : -500px;
    }
  }
    .navigation{
        top: 5px;
        left: 60%;
        font-size: 1.1rem;
        line-height: 20px;
        transform: translateY(-100%);
        animation: navProject 1s ease forwards;

        @media screen and (max-width: 650px){
        left: 70%;
        }
    
        @keyframes navProject {
        to {
            transform: translateY(0);
        }
        }

        &:before {
            left: -62px;
            top: -167px;
        }
        .nav-projects {
        transform: translateX(67px);
        padding: 0 20px;
        }
    }
    .logo {
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        transform: scale(0);
        animation: logoProject 2s ease forwards;
    
        @keyframes logoProject {
        to {
            transform: scale(1);
        }
        }
    }
`;

export const HeroSection = styled.div`
    width: 100vw;
    height: 45vw;
    display: flex;
    justify-content: center;
    position: relative;
`;

export const MainContent = styled.div`

`;

export const LeftBlock = styled.div`

`;

export const Topic = styled.div`

`;

export const Circle = styled.span`

`;

export const Title = styled.h1`

`;

export const SubText = styled.h5`

`;

export const CTA = styled.button`

`;