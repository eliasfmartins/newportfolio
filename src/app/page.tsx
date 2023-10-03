import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
export default function Home() {
  return (
    <motion.div>
     <div>
      <h1>Trasforming Ideas <br /> Into <span>Digital Reality</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis nesciunt cumque ipsam commodi corrupti eius incidunt. Nam voluptates dolorem totam ullam soluta vel? Expedita aut sed nobis neque commodi!</p>
      <div>
        {/* <ProjectsBtn /> */}
        <button>Projectsbtn</button>
      </div>
     </div>
     <div>image</div>
    </motion.div>
  );
}
