import styled, { keyframes } from "styled-components";

export const move = keyframes`
  0% { transform:translateY(-5px); }
  50% { transform:translateY(10px); }
  100% { transform:translateY(-5px); }
`;

export const HeroSection = styled.div`
    width: 100vw;
    height: 45vw;
    display: flex;
    justify-content: center;
    color: var(--blanc-casse);

    @media only Screen and (max-width: 48em){
        height: 70vw;
        display: block;
    }

    @media only Screen and (max-width: 420px){
        height: auto;
        padding-bottom: 2rem;
    }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;

  @media only Screen and (max-width: 48em){
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;

  @media only Screen and (max-width: 48em){
      width: 80%;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      margin-top: calc(2.5rem + 2.5vw);
      filter: drop-shadow(2px 4px 6px var(--black-color));
  }
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

  &:hover{
    transform: scale(1.1);
  }
  &:active{
    transform: scale(0.9);
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

  @media only Screen and (max-width: 48em){
      align-self: flex-start;
      position: absolute;
      bottom: 0;
      opacity: 0.5;
  }

  @media only Screen and (max-width: 40em){
      display: none;
  }
`;