import styled, { keyframes } from "styled-components";

export const move = keyframes`
  0% { transform:translateY(-5px); }
  50% { transform:translateY(5px) ; }
  100% { transform:translateY(-5px); }
`;

export const ServiceSection = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin-top: 5rem; */
    position: relative;
    padding-top: 20rem;
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
    z-index: -1;
    /* background-color: black; */
    background-size: auto 100vh;
    background-repeat: no-repeat;
`;

export const Title = styled.h1`
    display: inline-block;
    font-size: 2rem;
    margin-top: 1rem;
    position: relative;

    &::before{
        content:'';
        width: 8rem;
        height: 2rem;
        position: absolute;
        left: 50%;
        bottom: -110%;
        transform: translate(-50%, 0.5rem);
        border: 5px solid var(--teal-blue);
        border-color: var(--teal-blue) transparent transparent transparent;
        border-radius: 150%/60px 70px 0 0;
    }
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

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10rem 10rem;
    position: relative;

    @media only Screen and (max-width: 64em) {
        margin: 10rem calc(4rem + 5vw);
    }

    @media only Screen and (max-width: 48em) {
        display: block;
        &:last-child {
        margin-bottom: 2rem;
        }
    }
    @media only Screen and (max-width: 40em) {
        margin: 10rem calc(2rem + 3vw);
        &:last-child {
        margin-bottom: 1rem;
        }
    }
`;

export const OBJ = styled.div`
position: absolute;
top: 80%;
right: 35%;
display: flex;
justify-content: center;
align-items: center;
width: 20vw;
/* z-index: 1; */

img {
    visibility: hidden;
}

@media only Screen and (max-width: 48em) {
  opacity: 0.5;
}

   

`;