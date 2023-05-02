import { FC } from "react";
import { motion } from "framer-motion";

export const FoxDataItem: FC<{
  id: number;
  itemName: string;
  itemValue: number;
  isOpenCard: boolean;
}> = ({ id, itemName, itemValue, isOpenCard }) => {
  return (
    <p>
      {itemName}
      <motion.span
        key={`population${id}`}
        initial={{ rotateX: "0deg" }}
        animate={isOpenCard ? { rotateX: "360deg" } : { rotateX: "0deg" }}
        transition={{ duration: 1 }}
      >
        {itemValue}
      </motion.span>
    </p>
  );
};
