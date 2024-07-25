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
			<TopLeftImg />
			<TextContainer>
				<motion.h1
					variants={fadeIn('up', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
				>
					Welcome to my <span>portfolio</span>
				</motion.h1>
				<motion.p
					variants={fadeIn('down', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
				>
					Bem-vindo ao meu portfólio! Aqui, você terá a oportunidade de explorar quem eu sou, minhas habilidades, conhecimentos e projetos. Sinta-se à vontade para explorar e fazer parte desta jornada comigo.
				</motion.p>
				<motion.div
					variants={fadeIn('down', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
				>
					<RoutateBtn />
				</motion.div>
			</TextContainer>
			<div className="image"></div>
			<Circles />
			<Bulb />
		</PageContainer>
	);
}

const PageContainer = styled.main`
  overflow: hidden;

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
    z-index: -1;
  }
`;



const TextContainer = styled.div`
display: flex;
max-width: 1200px;
height: calc(100vh - 60px);
flex-direction: column;
justify-content: center;
gap: 2rem;
padding: 0 2rem;
align-items: center;
margin: 0 auto;
margin-top: -45px;
h1{
	text-align: center;
}
p{

	text-align: center;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
  span {
    color: #ff8c00;
  }

  @media (min-width: 600px) {
	margin-top: 0;

	margin-bottom: 0px;
	h1{
		font-size: 2.5rem;
	}

    
  }

  @media (min-width: 800px) {
	align-items: start;
	text-align: left;
	p{
		max-width: 700px;
	text-align: left;
	}
	h1{
		font-size: 3rem;
	}
  }
`;
