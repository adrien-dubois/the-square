import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    overflow: hidden;

    &:after {
        content: '';
        height: 700px;
        width: 700px;
        background: var(--blanc-casse);
        border-radius: 50%;
        position: absolute;
        bottom: -480px;
        right: -70px;
        z-index: -2;
        

        @media screen and (max-width: 650px){
        height: 400px;
        width: 400px;
        bottom: -270px;
        }

        
        @media screen and (max-width: 430px){
        display: none;
        }
    }
`;

export const HomeMain = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    padding-left: 1rem;
    width: auto;
    height: 95%;
    overflow: hidden;
`;


export const MainContent = styled.div`
    user-select: none;

        h1 {
        font-size: 3.7rem;
        position: relative;
        font-family: var(--font-2);
        color: var(--teal-blue);

        @media screen and (max-width: 650px){
            font-size: 2rem;
        }
        @media screen and (min-width: 1200px){
            font-size: 5rem;
        }

        &:before {
            content: '';
            position: absolute;
            height: 225px;
            width: 225px;
            border: 2px var(--blanc-casse) solid;
            top: -40px;
            left: -180px;
            z-index: -1;
            animation: h1Anim 1.5s forwards ease;
            transform: scale(0);

            @media screen and (max-width: 850px){
            height: 110px;
            width: 110px;
            left: -40px;
            top: -15px;
            }

            @keyframes h1Anim {
            to {
                transform: scale(1);
            }
            }
        }
        }
        h2 {
        font-size: 4.2rem;
        font-weight: 100;
        color: var(--teal-blue);

        @media screen and (max-width: 650px){
            font-size: 2rem;
        }
        @media screen and (min-width: 1200px){
            font-size: 5rem;
        }
        }
`;