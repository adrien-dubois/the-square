import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: 1.2rem calc(2.5rem + 2.5vw);
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media only Screen and (max-width: 48em) {
        flex-direction: column;
        align-items: center;
        div {
            &:first-child{
                margin-bottom: 1rem;
            }
        }
        .nav-button{
            display: none;
        }
    }
`;

export const LeftText = styled.p`
    color: var(--blanc-casse);

    span{
        color: var(--teal-blue);
    }
`;

export const RightText = styled.div`

color: var(--blanc-casse);

    .social-network {
      position: relative;
      width: 80%;
      margin: 0 auto;
      color: var(--blanc-casse);

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

      svg{
        color: var(--blanc-casse);
      }
    }

`;