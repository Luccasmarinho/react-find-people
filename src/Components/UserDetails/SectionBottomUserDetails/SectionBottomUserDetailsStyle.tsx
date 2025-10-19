import styled from "styled-components";

interface ButtonProps {
  $nameBtn?: string;
}

export const Container = styled.div`
  color: white;
  display: flex;
  justify-content: center;
`;

export const TabInfo = styled.div`
  width: 406px;
  height: 330px;
`;

export const AreaButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 35px;
  background-color: transparent;
  color: var(--text);
  border: none;
  padding: 8px;
  cursor: pointer;
  border-bottom: ${({ $nameBtn, id }) =>
    $nameBtn === id ? "3px solid var(--primary)" : "none"};
`;
