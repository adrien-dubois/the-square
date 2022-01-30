import styled from "styled-components";

export const TeamSection = styled.div`
    width: 100%;
    background: var(--blanc-casse);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
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

export const Carousel = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;