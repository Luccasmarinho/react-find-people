import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  p {
    color: var(--text);
    font-size: 18px;
  }

  img {
    width: 500px;
  }

  @media screen and (max-width: 520px) {
    img {
      width: 250px;
    }

    p {
      font-size: 15px;
      text-align: center;
    }
  }
`;
