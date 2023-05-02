import { FC } from "react";
import { motion } from "framer-motion";

export const FoxParam: FC<{
  id: number;
  paramName: string;
  paramValue: string;
  isOpenCard: boolean;
}> = ({ id, paramName, paramValue, isOpenCard }) => {
  return (
    <motion.p>
      {paramName}
      <motion.span
        key={`${paramName}${id}`}
        initial={{ scaleY: 0 }}
        animate={isOpenCard ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {paramValue}
      </motion.span>
    </motion.p>
  );
};
