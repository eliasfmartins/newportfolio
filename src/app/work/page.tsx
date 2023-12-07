'use client';

import styled from 'styled-components';
import { WorkSlider } from '../components/WorksSllider copy';
import { Circles } from '../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Bulb } from '../components/Bulb';
import { TopLeftImg } from '../components/TopLeftImg';



export default function Work() {
	return (
		<WorkContainer>
			<TopLeftImg />
			<Bulb />
			<WorkContent >
				<motion.div className='container' variants={fadeIn('up', 0.5)} initial={'hidden'} animate={'show'} exit={'hidden'} >


					<h2> My Works <span>.</span></h2>
					<p> Explore alguns dos meus projetos recentes aqui. Dê uma olhada nos códigos-fonte, veja como eles funcionam e descubra o processo por trás de cada solução criativa. Estou animado para compartilhar meu trabalho e as histórias por trás de cada projeto. Se houver algo que chame sua atenção, não hesite em entrar em contato para discutirmos mais detalhes!</p>
				</motion.div>

				<WorkSlider />

			</WorkContent>
			<Circles />

		</WorkContainer>
	);
}
const WorkContainer = styled.main`
width: 100%;
height:auto;
display:flex;
flex-direction:column;
justify-content:space-evenly;
gap:2rem;
height:100%;
@media (max-width:600px){
	margin:0;
}

`;

const WorkContent = styled.div`
height: calc(100vh - 60px);
display: flex;
justify-content: baseline;
z-index:10;


@media (max-width: 1200px){
	height: calc(100vh - 30vh);
	justify-content:space-around;
	flex-direction: column;
	margin: 200px 0;
	.container{
		width: 90%;
		justify-content:space-around;

	}
	
}
@media (max-width: 1200px){
	margin: 250px 0;
	.container{
		width: 90%;
		justify-content:space-around;

	}
	
}
@media (max-width: 800px){
	margin: 150px 0;

	.container{
		width: 90%;
	}
}

	@media (max-width:600px){
	.container{
		gap: 2rem;
		height: 40%;
	}
	margin:0;
	margin-bottom:40px;
}
	text-align: center;


h2{
	font-size: 3rem;
}
span{
	color: #FF8C00;
}
	margin: 0 auto;
	max-width: 1200px;
	display: flex;
	align-items: center;
.container{
	display: flex;
	gap: 2rem;
	flex-direction: column;
	min-width: 35%;
	padding: 0 20px;
	height: 50%;
	text-align: justify;
	margin-bottom: 10px;
}

`;