import styled, { keyframes } from "styled-components";

export const move = keyframes`
  0% { transform:translateY(-5px); }
  50% { transform:translateY(10px) translateX(10px); }
  100% { transform:translateY(-5px); }
`;

export const AboutSection = styled.div`
    background: var(--blanc-casse);
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Waves = styled.img`
    width: 100%;
`;

export const Main = styled.div`
    margin: 0 15rem;
    margin-top: 7rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media only Screen and (max-width: 64em) {
        margin: 3rem calc(5rem + 5vw);
        margin-top: 10rem;
    }

    @media only Screen and (max-width: 40em) {
        align-items: center;
        margin: 3rem calc(3rem + 3vw);
    }
`;

export const Title = styled.h1`
    display: inline-block;
    font-size: 2rem;
`;

export const CurvedLine = styled.div`
    width: 7rem;
    height: 2rem;
    border: 5px solid var(--teal-blue);
    border-color: var(--teal-blue) transparent transparent transparent;
    border-radius: 150%/60px 70px 0 0;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only Screen and (max-width: 40em){
        flex-direction: column;
    }
`;

export const Rocket = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    padding-bottom: 5rem;
    animation: ${move} 2.5s ease infinite;

    @media only Screen and (max-width: 40em) {
        width: 50vw;
        padding-bottom: 0;
    }
`;

export const AboutText = styled.div`
    position: relative;
    width: 50% ;

    @media only Screen and (max-width: 40em) {
        width: 100%;
    }
`;

export const Astronaut = styled.div`
    width: 50%;
    margin-bottom: 3rem;
    position: absolute;
    right: 0;
    bottom: 100%;

    @media only Screen and (max-width: 40em) {
        display: none;
    }
`;

export const Text = styled.h4`
    font-size: calc(0.5rem + 1vw);
    line-height: 1.5;
    color: var(--black-color);
`;

export const Circle = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--black-color);
    margin-right: 0.5rem;
    margin-top: 1rem;
`;
