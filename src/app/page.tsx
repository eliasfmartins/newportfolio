'use client';

import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import styled from 'styled-components';
import { RoutateBtn } from './components/Routatebtn';
import { TopLeftImg } from './components/TopLeftImg';

export default function Home() {
	return (
		<PageContainer as={motion.div}>
			<TopLeftImg />
			<div>
				<h1>
					Trasforming Ideas <br /> Into <span>Digital Reality</span>
				</h1>
				<motion.p
					variants={fadeIn('down', 0.4)}
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
					variants={fadeIn('down', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
				>
					{/* <ProjectsBtn /> */}
					<RoutateBtn />
				</motion.div>
			</div>
			<div className='image'></div>
			{/* sem background pra baguia com fundo ele q turou o background*/}
			{/* mix color css como n sei */}
			<div>particles</div>
		</PageContainer>
	);
}
export const PageContainer = styled.main`
.image{
  background: url('/explosion.png');
	mix-blend-mode: color-dodge; 
	width: 1200px;
	height: 100%;
	position: absolute;
	right: 0;
	bottom: 0;
}
`;
