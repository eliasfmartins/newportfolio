'use client';

import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import styled from 'styled-components';
import { RoutateBtn } from './components/Routatebtn';
import { TopLeftImg } from './components/TopLeftImg';
import { Circles } from './components/Circles';
import { Bulb } from './components/Bulb';

export default function Home() {
	return (
		<PageContainer as={motion.div}>
			<PageContent>

				<TopLeftImg />
				<div className='text'>
					<motion.h1 variants={fadeIn('up', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden">
						Welcome to my  <span>portfolio</span>
					</motion.h1>
					<motion.p
						variants={fadeIn('down', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						Bem-vindo ao meu portfólio! Aqui, você terá a oportunidade de explorar quem eu sou, minhas habilidades, conhecimentos e projetos.Sinta-se à vontade para explorar e fazer parte desta jornada comigo
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

			</PageContent>
			<div className='image'></div>
			<Circles />
			<Bulb />


		</PageContainer>
	);
}
const PageContainer = styled.main`
	overflow: hidden;
	display:flex;
	height: 100%;
	

@media (max-width:1300px){
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	div.text{
		width: 100%;
		margin-bottom: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 25px;
	}
	.image::before{
		height: 100%;
		/* z-index: 50; */
	}
}
.image{
}
.image::before {
    content: '';
    background-image: url('./explosion.png');
    mix-blend-mode: luminosity;
    width: 100%;
		height: 100%;
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: -1; /* Garante que o pseudo-elemento está atrás do conteúdo */
  }
.text{
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	min-height:60%;
	gap: 4rem;
	width: 65%;
	padding: 25px;
	gap: 2rem;
}
`;
const PageContent = styled.div`
overflow: hidden;
@media (max-width:1300px){
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

	max-width: 1200px;
	min-height: calc(100vh - 60px);
	margin: 0 auto;
	span{
		color: #FF8C00;
	}
	h1{
		font-size: 3rem;
	}
`;
