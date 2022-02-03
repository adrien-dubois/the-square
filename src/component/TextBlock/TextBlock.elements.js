import styled from "styled-components";

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ start }) => (start ? 'flex-end' : 'flex-start')};
  width: 50%;
  line-height: 1.5;
  color: var(--blanc-casse);
  position: relative;
  /* z-index: 1; */
  @media only Screen and (max-width: 48em){
      width: 100%;
      text-align: center;
      align-items: center;

  }
`;

export const Topic = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-5);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;

  @media only Screen and (max-width: 48em) {
    font-size: calc(0.4rem + 0.8vw);
  }
`;

export const Square = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: var(--blue-gray);
  margin-right: 0.5rem;
`;

export const Title = styled.div`
  font-size: calc(0.8rem + 0.8vw);
  text-align: ${({titleRight}) => (titleRight ? 'right' : 'left')} ;
  line-height: 1.2;
  padding: 0.5rem 0;

  @media only Screen and (max-width: 48em) {
    font-size: calc(1rem + 1.5vw);
    text-align: center;
  }
`;

export const SubText = styled.div`
  width: 90%;
  text-align: ${({subRight}) => (subRight ? 'right' : 'left')};
  font-size: calc(0.6rem + 0.6vw);
  color: var(--teal-blue);
  white-space: pre-wrap;

  @media only Screen and (max-width: 48em) {
    font-size: calc(0.5rem + 1vw);
  }
`;
