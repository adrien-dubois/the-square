import styled from "styled-components";

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
    display: flex;
    justify-content: center;
    flex-direction: column;
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
`;

export const Rocket = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    padding-bottom: 5rem;
`;

export const AboutText = styled.div`
    position: relative;
    width: 50% ;
`;

export const Astronaut = styled.div`
    width: 50%;
    margin-bottom: 3rem;
    position: absolute;
    right: 0;
    bottom: 100%;
`;

export const Text = styled.h4`

`;

export const Circle = styled.span`

`;
