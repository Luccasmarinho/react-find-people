import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: relative;
  border-bottom: 1px solid color-mix(in srgb, var(--grey) 30%, transparent);
  padding: 5px;
`;

export const Button = styled.button`
  color: var(--primary);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: light;
  top: 16px;
  left: 32px;
  position: absolute;
`;
export const BoxProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--text);
  }

  h3 {
    color: var(--grey2);
  }

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin-top: 10px;
  }
`;
