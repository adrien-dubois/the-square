import styled from "styled-components";

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--blanc-casse);
  @media only Screen and (max-width: 48em){
      width: 80%;
      text-align: center;
      align-items: center;

  }
`;

export const Topic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-5);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

export const Square = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: var(--blue-gray);
  margin-right: 0.5rem;
`;

export const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

export const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--teal-blue);
`;
