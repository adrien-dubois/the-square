import styled from "styled-components";

export const ContacForm = styled.form`
    margin: 7% 0 0 24%;
    max-width: 50%;
    position: relative;
    max-width: 350px;

    @media screen and (max-width: 740px){
      margin: 2rem 0 0 30%;
    }
    @media screen and (max-width: 440px){
      margin-left: 2rem;
    }
    h2 {
      color: var(--teal-blue);
      margin-bottom: 25px;

      &:after {
        content: "";
        height: 70px;
        width: 70px;
        border: 1px var(--color-2) solid;
        position: absolute;
        top: -22px;
        left: 133px;
        z-index: -1;
    }
    
    .error::placeholder {
      color: var(--red-color);
    }
`;

export const FormContent = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr) 100px;

  input,
  textarea {
    color: var(--blanc-casse);
    background: none;
    font-family: var(--font-1);
    font-size: 1.2rem;
    border-bottom: 1px solid var(--color-2);

    @media screen and (min-width: 1200px) {
      font-size: 1.5rem;
    }
    &::placeholder{
        color: var(--blue-gray);
    }
  }

    input:-webkit-autofill,
    textarea:-webkit-autofill,
    input:-webkit-autofill:hover, 
    textarea:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    textarea:-webkit-autofill:focus, 
    input:-webkit-autofill:active,
    textarea:-webkit-autofill:active{
        box-shadow: 0 0 0 40px var(--bg-color) inset !important;
        -webkit-text-fill-color: var(--blanc-casse) !important;
    }
  input {
    padding: 24px 0 12px;
    width: 100%;

    @media screen and (max-width: 540px) {
      width: 75%;
      padding: 12px 0 6px;
    }
  }
  textarea {
    resize: none;
    padding: 24px 0;

    @media screen and (max-width: 540px) {
      width: 75%;
      padding: 12px 0;
    }
  }
`;

export const EmailContent = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid var(--color-2);

  @media screen and (max-width: 540px) {
    width: 75%;
  }

  #not-mail {
    display: none;
    position: absolute;
    top: 8px;
    color: var(--red-color);
    right: 0;
    transform-origin: 50% 50%;
  }

  @keyframes dongle {
    0% {
      transform: translate(0px, 0px);
    }
    10% {
      transform: translate(-10px, 0px);
    }
    20% {
      transform: translate(10px, 0px);
    }
    30% {
      transform: translate(-10px, 0px);
    }
    40% {
      transform: translate(10px, 0px);
    }
    50% {
      transform: translate(-10px, 0px);
    }
    60% {
      transform: translate(10px, 0px);
    }
    70% {
      transform: translate(-10px, 0px);
    }
    80% {
      transform: translate(10px, 0px);
    }
    90% {
      transform: translate(-10px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  input {
    border: none;
  }
`;

export const FormMessage = styled.div`
    margin-top: 10px;
    padding: 12px;
    opacity: 0;
    background: var(--color-2);
    transition: 0.3s ease;
    color: var(--color-1);
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(51, 51, 51, 0.3);
`;

export const ButtonForm = styled.input`
    background: var(--color-3);
    height: 55px;
    width: 126px;
    border-radius: 50px;
    margin-top: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.2s;

        &:hover {
            letter-spacing: 1px;
            color: var(--color-2);
        }
`;