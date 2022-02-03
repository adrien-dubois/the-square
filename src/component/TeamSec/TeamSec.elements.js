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
    font-size: calc(1rem + 1.5vw);
    margin: 1rem 0 2rem 0;
    position: relative;
    z-index: 1;

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


export const Carousel = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 5;

    @media only Screen and (max-width: 40em) {
        width: 90vw;
        .slick-slider .slick-arrow {
            display: none;
        }
    }

    .slick-slider .slick-arrow:before{
        color: var(--black-color);
        font-size: 1.5rem;

        @media only Screen and (max-width: 40em) {
            display: none;
        }
    }

    .slick-slider .slick-dots button:before {
        color: var(--black-color);
        font-size: 1.5rem;
    }

    .slick-slide.slick-active{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        padding: 0;
        margin-bottom: 3rem;
    }
`;