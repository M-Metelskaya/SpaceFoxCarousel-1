import { FC } from "react";
import { motion } from "framer-motion";

export const ProgressItem: FC<{
  progressParam: number;
  icon: JSX.Element;
  isOpenCard: boolean;
}> = ({ progressParam, icon, isOpenCard }) => {
  return (
    <div className="progressItem">
      <div style={{ color: "#1bd6de" }}>{icon}</div>
      <div className="progressBar">
        <motion.div
          key={progressParam}
          initial={{
            width: 0,
          }}
          animate={
            isOpenCard
              ? {
                  width: `${progressParam}%`,
                }
              : {
                  width: 0,
                }
          }
          transition={{ duration: 1 }}
          className="progressFill"
        ></motion.div>
      </div>
    </div>
  );
};
