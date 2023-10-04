'use client'
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "./variants";
export default function Home() {
  return (
    <motion.div>
      <div>
        <h1>
          Trasforming Ideas <br /> Into <span>Digital Reality</span>
        </h1>
        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          veritatis nesciunt cumque ipsam commodi corrupti eius incidunt. Nam
          voluptates dolorem totam ullam soluta vel? Expedita aut sed nobis
          neque commodi!
        </motion.p>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {/* <ProjectsBtn /> */}
          <button>Projectsbtn</button>
        </motion.div>
      </div>
      <div>image</div>
      {/* sem background pra baguia com fundo ele q turou o background*/}
      {/* mix color css como n sei */}
      <div>particles</div>
    </motion.div>
  );
}
