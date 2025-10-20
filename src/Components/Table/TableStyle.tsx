import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 1300px;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: center;
  color: var(--text);
  font-weight: 500;
  background-color: var(--primary);
`;

export const Td = styled.td`
  padding: 10px;
  text-align: center;
  color: var(--text);
  font-weight: 100;
  background-color: var(--background);
  border-bottom: 1px solid #ffffff3b;
`;

export const Button = styled.button`
  background-color: transparent;
  color: var(--primary);
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
