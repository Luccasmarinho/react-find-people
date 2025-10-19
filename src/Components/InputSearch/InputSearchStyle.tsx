import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.h1`
  color: var(--text);
  font-weight: 700;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 672px;
  height: 50px;
  padding: 10px;
  border: 1px solid var(--grey2);
  border-radius: 8px;
  background-color: transparent;
  color: var(--text);
`;
