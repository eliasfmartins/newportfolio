import { motion, animate, delay } from "framer-motion";
//variants
const transitionsVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};
export const Transtition = () => {
  return (
    //essa div motion e aque aparece tem q botar uma cor e tals pra ver 3 cores diferentes
    <div>
      <motion.div variants={transitionsVariants} initial="initial" animate="animate" exit="exit" transition={{delay:0.2, duration:0.6, ease:'easeInOut'}}>
        
      </motion.div>
      <motion.div variants={transitionsVariants} initial="initial" animate="animate" exit="exit" transition={{delay:0.4, duration:0.6, ease:'easeInOut'}}>
        
      </motion.div>
      <motion.div variants={transitionsVariants} initial="initial" animate="animate" exit="exit" transition={{delay:0.6, duration:0.6, ease:'easeInOut'}}>
        
      </motion.div>
    </div>
  );
};
