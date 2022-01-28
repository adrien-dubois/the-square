import styled, { keyframes } from "styled-components";

export const move = keyframes`
  0% { transform:translateY(-5px); }
  50% { transform:translateY(5px) ; }
  100% { transform:translateY(-5px); }
`;

export const ServiceSection = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    padding-top: 20rem;
    position: relative;
    color: var(--blanc-casse);
`;

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 85vh;
    background-size: auto 100vh;
    z-index: -1;
`;

export const Title = styled.h1`
    display: inline-block;
    font-size: 2rem;
    margin-top: 1rem;
    position: relative;
`;

export const CurvedLine = styled.div`
    width: 8rem;
    height: 2rem;
    border: 5px solid var(--teal-blue);
    border-color: var(--teal-blue) transparent transparent transparent;
    border-radius: 150%/60px 70px 0 0;
`;

export const ScrollContainer = styled.div`
    margin-top: 2rem;
    animation: ${move} 4s ease infinite;
`;

export const Line = styled.span`
    border-left: 4px solid var(--blanc-casse);
    height: 15rem;
    margin-top: 2rem;
    border-radius: 20px 20px 0 0;
`;
export const Triangle = styled.span`
    width: 0;
    height: 0;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-top: 2rem solid var(--blanc-casse);
`;