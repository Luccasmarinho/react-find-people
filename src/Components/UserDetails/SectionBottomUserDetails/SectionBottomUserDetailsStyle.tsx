import styled from "styled-components";
import { motion } from "framer-motion";
import type {ButtonProps} from "../../../interfaces/interfaces"

export const Container = styled(motion.div)`
  color: white;
  display: flex;
  justify-content: center;
`;

export const TabInfo = styled.div`
  width: 406px;
  height: 330px;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const AreaButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Fields = styled.div`
  li {
    display: flex;
    flex-direction: column;
    margin-top: 3px;
  }
  h3 {
    font-size: 20px;
  }

  p {
    font-family: 16px;
    color: var(--grey2);
  }
`;

export const Button = styled.button<ButtonProps>`
  position: relative;
  width: 100%;
  height: 35px;
  background-color: transparent;
  color: var(--text);
  border: none;
  padding: 8px;
  cursor: pointer;
`;

export const BorderHighlight = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--primary);
`;
