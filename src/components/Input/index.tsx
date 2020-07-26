import React from "react";
import {
  motion,
  useAnimation,
  ForwardRefComponent,
  HTMLMotionProps,
} from "framer-motion";

// This doesnt work
// const Input: React.FC<ForwardRefComponent<
//   HTMLInputElement,
//   HTMLMotionProps<"input">
// >> = ({ ...props }) => {
//   const controls = useAnimation();

//   return (
//     <motion.input
//       {...props}
//       animate={controls}
//       onFocus={() => controls.start({ scale: 1.1 })}
//       onBlur={() => controls.start({ scale: 1 })}
//     />
//   );
// };

const Input: React.FC = ({ ...props }) => {
  const controls = useAnimation();

  return (
    <motion.input
      {...props}
      animate={controls}
      onFocus={() => controls.start({ scale: 1.1 })}
      onBlur={() => controls.start({ scale: 1 })}
    />
  );
};

export default Input;
