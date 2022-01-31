import styled from "styled-components";

export const Image = styled.div`
    width: 100%;
    height: 100%;
    background: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
    border-radius: 8px;
    transition: 1s;
`;

export const CARD = styled.div`
    width: 413px;
    height: 600px;
    background-color: var(--bg-color);
    transform: scale(0.7);
    border-radius: 8px;
    box-shadow: 0 0 80px 1px rgba(0, 0, 0, 0.8);

    &:hover ${Image}{
        transform: scale(0.5 , 0.35) translateY(-865px);
        border-radius: 50%;
        background-size: 100% 150%;
        background-position: 0 -25px;
        
        /* &:last-child{
            background-position: 0 -230px;
        } */
    }

    @media only Screen and (max-width: 450px){
        box-shadow: none;
        margin: 0 -2rem;
        height: 570px; 
    }
 
`;

export const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
`;


export const Name = styled.h3`
    font-size: 2.1rem;
    font-weight: 600;
    color: var(--blanc-casse);
    position: absolute;
    top: 6.5rem;
    letter-spacing: 2px;
`;

export const Subtitle = styled.h4`
    font-size: 1.5rem;
    color: var(--teal-blue);
    position: absolute;
    top: 9.2rem;
`;

export const Divider = styled.div`
    width: 8rem;
    height: 2rem;
    border: 5px solid var(--teal-blue);
    border-color: var(--teal-blue) transparent transparent transparent;
    border-radius: 150%/60px 70px 0 0;
    position: absolute;
    top: 12.2rem;
`;

export const Text = styled.h4`
    position: absolute;
    top: 15.7rem;
    color: var(--blue-gray);
    line-height: 1.75rem;
    font-size: 1.4rem;
    text-align: center;
    margin: 0 .8rem;
`;

export const ContactButton = styled.button`
    position: absolute;
    bottom: 7rem;
    background-color: var(--color-5);
    color: var(--blanc-casse);
    border: none;
    font-size: 1.25rem;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    a{
        color: var(--blanc-casse);
    }

    @media only Screen and (max-width: 450px) {
        bottom: 5rem;
    }
`;
