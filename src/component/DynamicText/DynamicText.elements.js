import styled from "styled-components";

export const DynamicTextContainer = styled.span`
    position: relative;
    display: flex;

  .word {
    position: absolute;
  }
  @keyframes color {
    0% {
      color: var(--blanc-casse);
    }
    50% {
      color: var(--teal-blue);
    }
    100% {
      color: var(--blanc-casse);
    }
  }
  .letter {
    transform: translateZ(200px);
  }
  @keyframes anim {
    25% {
      transform: translateZ(0px);
      opacity: 1;
    }
    32% {
      opacity: 0;
      transform: translateZ(-280px) translateX(200px);
    }
  }
`;

export const Simply = styled.span`
    color: var(--teal-blue);
`;

export const TextTarget = styled.span`
    display: flex;
    width: 300px;
    text-align: left;
    animation: color 30s alternate infinite;
    perspective: 200px;
    transform: translateX(26px);
`;