import React from "react";
import { motion, useAnimation } from "framer-motion";
import styled, { StyledComponent } from "styled-components";

const StyledInput = styled(motion.input)`
  padding: 10px 18px;
  font-size: 16px;
  margin: 2px 0;
  border-radius: 4px;
`;

const Input: React.FC = ({ ...props }) => {
  const controls = useAnimation();

  return (
    <StyledInput
      {...props}
      animate={controls}
      onFocus={() => controls.start({ scale: 1.1 })}
      onBlur={() => controls.start({ scale: 1 })}
    />
  );
};

export default Input;
