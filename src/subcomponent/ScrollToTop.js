import React from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Up = styled.div`
    position: fixed;
    right: 5.5rem;
    bottom: 5rem;
    cursor: pointer;

    @media only Screen and (max-width: 48em) {
        display: none;
    }

    svg {
        width: 3rem;
        height: 3rem;
        background-color: var(--blanc-casse);
        border-radius: 50%;
        border: 2px solid var(--blanc-casse);
        transition: transform .3s;

        &:hover{
            transform: scale(1.2);
        }
        &:active{
            transform: scale(0.9);
        }
    }
`;

const ScrollToTop = () => {
    const ScrollUp = () => {
        const element = document.getElementById("home");
        element.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    };
  return (
    <Up onClick={() => ScrollUp()} >
        <FaArrowAltCircleUp fill='var(--teal-blue)' />
    </Up>
  );
};

export default ScrollToTop;
