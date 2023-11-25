'use client';

import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import styled from 'styled-components';
import { RoutateBtn } from './components/Routatebtn';
import { TopLeftImg } from './components/TopLeftImg';

export default function Home() {
	return (
		<PageContainer as={motion.div}>
			<PageContent>

				<TopLeftImg />
				<div className='text'>
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
				{/* sem background pra baguia com fundo ele q turou o background*/}
				{/* mix color css como n sei */}
				<div className='image'></div>
			</PageContent>
		</PageContainer>
	);
}
export const PageContainer = styled.main`
.image{
  background-image: url('./explosion.png');
	mix-blend-mode: luminosity; 
	width: 100vw;
	height: 100vh;
	background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
	position: absolute;
	right: 0;
	bottom: 0;
}
.text{
	display: flex;
	flex-direction: column;
	max-width: 50%;
	padding: 25px;
	gap: 2rem;
}
`;
export const PageContent = styled.div`
	max-width: 1200px;
	height: calc(100vh - 60px);
	margin: 0 auto;
`;
