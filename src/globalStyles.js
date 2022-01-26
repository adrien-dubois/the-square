import styled, { createGlobalStyle } from "styled-components";
import KronaOne from "./assets/fonts/KronaOne-Regular.ttf";
import Michroma from "./assets/fonts/Michroma-Regular.ttf";
import Montserrat from "./assets/fonts/Montserrat-VariableFont_wght.ttf";
import Questrial from "./assets/fonts/Questrial-Regular.ttf";

const GlobalStyle = createGlobalStyle`

    @font-face{
        font-family: 'Questrial';
        src: url(${Questrial}) format('truetype');
    }

    @font-face{
        font-family: 'KronaOne';
        src: url(${KronaOne}) format('truetype');
    }

    @font-face{
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('truetype');
    }

    :root{
        /* FONT */
        --font-1: "Questrial", sans-serif;
        --font-2: "KronaOne", serif;
        --font-3: "Montserrat", sans-serif;
        /* COLORS */
        --color-1: #fafeff;
        --color-2: #00c1ec;
        --color-3: #e7f7fe;
        --color-5: rgb(141, 141, 141);
        --black-color: rgb(40, 40, 40);
        --red-color: rgb(253, 87, 87);
        --white-color: #FFF;
        --black-normal: #000;
        --teal-blue: #00ADB5;
        --blanc-casse: #EEEEEE;
        --blue-gray: #607D8B; 
        --gris-fonce: #393E46;
        --bg-color: #393E46;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        outline: none;
        border: none;
        text-decoration: none;
        

        &::selection {
            color: var(--color-1);
            background: var(--color-2);
        }
    }

    html { 
        scroll-behavior: unset;
    }

    a,
    a:visited {
        color: var(--teal-blue);
    }

    body {
        font-family: var(--font-1);
        height: 100vh;
        background: var(--bg-color);
        color: var(--black-color);
        overflow: hidden;

        @media screen and (max-width: 430px){
            position: relative;
            max-width: 100vw;
            overflow-y: initial;
        }
    }

    main{
        position: relative;
    }

`;

export const Button = styled.button`
  background: var(--color-3);
  height: 55px;
  width: 126px;
  border-radius: 50px;
  margin-top: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover{
      letter-spacing: 1px;
      color: var(--color-2);
  }
`;


export default GlobalStyle;