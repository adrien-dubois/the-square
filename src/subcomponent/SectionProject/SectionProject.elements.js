import styled from "styled-components";

export const ProjectMain = styled.div`
    width: 100%;
    padding: 0 max(5vw, 1rem);
    margin: 8rem 1rem 0;
    display: grid;
    grid-template-columns: 33% 67%;
    position: relative;
    text-align: right;
    margin-top: 5rem;
    transform-style: perspective-3d;
    perspective: 900px;

    @media screen and (max-width: 810px){
      grid-template-columns: 25% 75%;
    }

    @media screen and (max-width: 700px){
      grid-template-columns: 1fr;
      grid-template-rows: 100px 1fr;
    }

    @media screen and (max-height: 600px){
      margin: 3rem 1rem 0;
    }
`;

export const ProjectContent = styled.div`
      margin-right: 20px;
      z-index: 1;
      
      @media screen and (max-width: 700px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .5rem;
      }
`;

export const ProjectTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 12px;
    font-family: var(--font-2);
    color: var(--teal-blue);
    transform: scaleX(0);
    animation: transformTitle 1.5s ease forwards;
    transform-origin: 150%;

    @media screen and (max-width: 810px){
        font-size: 2rem;
    }
    @media screen and (max-width: 450px){
        font-size: 1.2rem;
    }

    @keyframes transformTitle {
        to {
        transform: scaleX(1);
        }
    }
`;

export const ProjectText = styled.p`
    margin-bottom: 30px;
    color: ${({darkDate}) => (darkDate ? 'var(--black-color)' : 'var(--blanc-casse)') };
    font-size: 1.2rem;

    @media screen and (max-width: 700px){
        margin: 0;
    }
    @media screen and (max-width: 450px){
        font-size: .9rem;
    }
    
    &:after {
        content: "";
        height: 340px;
        width: 340px;
        filter: brightness(85%);
        background: ${({darkSquare}) => (darkSquare ? 'var(--bg-second)' : 'var(--color-3)')};
        position: absolute;
        top: -28px;
        left: 70px;
        z-index: -10;

        @media screen and (max-width: 810px){
        height: 220px;
        width: 220px;
        left: -30px;
        }
    }
`;

export const ProjectLanguages = styled.ul`

`;

export const ProjectLi = styled.li`
    font-size: 1.5rem;
    color: ${({darkLang}) => (darkLang ? 'var(--black-color)' : 'var(--blanc-casse)') };

    @media screen and (max-width: 700px){
        font-size: 1.1rem;
    }
    @media screen and (max-width: 400px){
        font-size: .8rem;
    }
    
`;

export const ProjectImg = styled.div`
    position: relative;
    text-align: left;
    margin-left: 10px;

    @media screen and (max-width: 700px){
    text-align: center;
    margin: 0 auto;
    }
    
    .img-container {
        border-radius: 5px;
        box-shadow: 0px 2px 4px rgba(51, 51, 51, 0.26);
        width: 600px;
        height: 380px;
        overflow: hidden;
        position: relative;

        @media screen and (max-width: 940px){
          height: 300px;
          width: 500px;
        }
        @media screen and (max-width: 540px){
          height: 200px;
          width: 370px;
        }
        @media screen and (max-width: 400px){
          height: 150px;
          width: 280px
        }

        &:hover span,
        span:hover {
          visibility: visible;
          transform: translateY(0);
        }

        img {
          overflow: hidden;
          object-fit: cover;
          object-position: 0%;
          width: 100%;
          height: 100%;
          position: absolute;
          transition: 0.4s ease-out;
          position: relative;

          &:hover,
          span:hover img {
            transform: scale(1.2);
            filter: opacity(15%) contrast(150%);
          }
        }
    }
`;

export const ImgSpan = styled.span`
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    padding: 1rem;
    margin: 0 auto;
    line-height: 34px;
    font-size: 1.5rem;
    visibility: hidden;
    transition: 0.5s ease;
    transform: translateY(200px);
`;

export const ImgTitle = styled.h3`
    padding-bottom: 10px;
    color: var(--teal-blue);    
`;

export const ImgTxt = styled.p`
    color: ${({lightInfos}) => (lightInfos ? 'var(--blanc-casse)' : 'var(--black-color)')} ;
    font-size: calc(0.5rem + 0.5vw);
`;

export const ButtonContainer = styled.div`
    width: 130px;   
`;

export const ButtonSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blanc-casse);
    background: var(--teal-blue);
    height: 55px;
    width: 126px;
    border-radius: 50px;
    margin-top: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.2s;

    @media screen and (max-width: 410px){
        width: 100px;
        font-size: .85rem;
    }

    &:hover {
        color: var(--teal-blue);
        background: var(--blanc-casse);
        letter-spacing: 1px;
    }
`;