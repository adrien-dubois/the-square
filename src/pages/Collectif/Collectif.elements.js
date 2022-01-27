import styled, { keyframes } from "styled-components";

export const move = keyframes`
0% { transform:translateY(-5px); }
50% { transform:translateY(10px); }
100% { transform:translateY(-5px); }
`;

export const Collective = styled.div`
  position: relative;
  /* height: 100vh; */
  /* width: 100vw; */

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
    
        @keyframes navProject {to {transform: translateY(0);}}

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
    color: var(--blanc-casse);
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
`;

export const Topic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-5);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

export const Square = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: var(--blue-gray);
  margin-right: 0.5rem;
`;

export const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

export const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--teal-blue);
`;

export const CTA = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s;
  line-height: 0;
  background: var(--blanc-casse);

  &:active{
    transform: scale(0.9);
  }
  
  &:hover{
    transform: scale(1.1);
  }

  img{
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const TeamSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: 60%;
  animation: ${move} 2.5s ease infinite;
`;