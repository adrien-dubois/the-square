import styled, { keyframes } from "styled-components";

export const logoProject = keyframes`
  to {transform: scale(1);}
`;

export const Collective = styled.div`
  position: relative;
  overflow: clip visible;

  &:after {
    content: "";
    height: 340px;
    width: 340px;
    border: 1px solid var(--blanc-casse);
    border-radius: 50%;
    position: absolute;
    top: -200px;
    left: -80px;
    z-index: -1;

    @media only Screen and (max-width: 810px){
      height: 200px;
      width: 200px;
      bottom: -110px;
    }
    @media only Screen and (max-width: 430px){
      left : -500px;
    }
  }
    .navigation{
        top: 5px;
        left: 60%;
        font-size: 1.1rem;
        line-height: 20px;
        transform: translateY(-100%);

        z-index: 5;

        &:before {
            left: -62px;
            top: -167px;
        }

        @media only Screen and (max-width: 650px){
          left: 70%;
        }
        
        .nav-projects {
        transform: translateX(65px);
        padding: 0 18px;
        }
    }
    .logo {
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        transform: scale(0);
        animation: ${logoProject} 2s ease forwards;
      }
`;

