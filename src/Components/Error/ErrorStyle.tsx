import styled from "styled-components";

export const Container = styled.section`
  p {
    color: var(--text);
    font-size: 15px;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    justify-content: center;
  }

  button {
    cursor: pointer;
    padding: 10px;
    background-color: var(--primary);
    color: var(--text);
    border-radius: 8px;
    margin: 0 auto;
  }
`;
