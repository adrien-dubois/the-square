import styled from "styled-components";

export const ContactContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 95vh;

    .social-network {
      position: relative;
      width: 80%;
      margin: 0 auto;
      right: 15%;

      @media screen and (max-width: 740px){
        width: 50%;
        grid-area: d;
      }
      @media screen and (min-width: 1200px){
        font-size: 2rem;
      }

      .content {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    #wrapper{
        visibility: hidden;
        opacity: 0;
    }

  .navigation {
    @media screen and (max-width: 440px){
     display: none;
    }
  }
  .logo {
    top: 8px;
    right: 1rem;
  }

    &:after {
    content: "";
    height: 700px;
    width: 700px;
    background: var(--blanc-casse);
    border-radius: 50%;
    position: absolute;
    top: 172px;
    right: -500px;
    z-index: -10;

    @media screen and (max-width: 840px){
      height: 400px;
      width: 400px;
      top: 520px;
      right: -140px;
    }
    @media screen and (max-width: 430px){
      display: none;
    }
  }
`;


export const ContactInfos = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: grid;
    grid-template-rows: repeat(4, 23%) 12%;
    height: 70%;
    width: 30%;
    max-width: 500px;

    @media screen and (max-width: 740px){
      height: 200px;
      width: 100%;
      max-width: 100%;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: 
        'a b c'
        'd d d'
        'e e f';
    }
    @media screen and (max-width: 540px){
      grid-template-rows: repeat(3, 60px);
      grid-template-columns: repeat(6, 1fr);
      grid-template-areas: 
        'b b b c c c'
        'd d d d d d'
        'e e e e f f';
    }
    @media screen and (max-height: 500px){
      display: none;
    }
    @media screen and (min-width: 1200px){
      width: 35%;
      height: 83%;
    }

    h4 {
      color: var(--teal-blue);
      font-size: 1.3rem;
      font-weight: 200;
      margin-bottom: 10px;

      @media screen and (min-width: 1200px){
        font-size: 1.8rem;
      }
    }
    p {
        color: var(--blue-gray);
      @media screen and (min-width: 1200px){
        font-size: 1.5rem;
      }
    }
`;

export const Adress = styled.div`
    position: relative;
    right: 5%;

    @media screen and (max-width: 540px){
    display: none;
    }
    .content {
    position: absolute;
    right: 10px;
    }
`;

export const Content = styled.div`

`;

export const Phone = styled.div`
    position: relative;

    @media screen and (max-width: 540px){
    text-align: center;
    font-size: .8rem;
    grid-area: b;
    }

    .content {
    position: absolute;
    left: 40%;
    transform: translateX(-50%);

        @media screen and (max-width: 540px){
            position: relative;
            margin: 0 auto;
            left: 0;
            transform: translateX(0);
        }
    }
    //
    .content p{
        transition: 0.25s;

        &:hover{
            transform: translateX(5px);
        }
    }
    @media screen and (max-height: 640px){
        display: none;
    }
`;

export const Email = styled.div`
    @media screen and (max-width: 540px){
    grid-area: c;
    font-size: .8rem;
    text-align: center;
    }
    .content p{
        transition: 0.25s;

        &:hover{
            transform: translateX(5px);
        }
    }
    @media screen and (max-height: 640px){
        display: none;
    }
`;

export const Credits = styled.div`
    text-align: center;

    @media screen and (max-width: 740px){
        transform: translateY(20px);
        font-size: .7rem;
        margin-right: 1rem;
        grid-area: f;
    }
    p {
    font-size: 0.9rem;

        span{
            color: var(--color-2);
        }
    }
`;