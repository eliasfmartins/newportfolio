'use client';

import styled from 'styled-components';
import { TestimonialSlider } from '../components/TestimonialSllider copy 2';
import { Circles } from '../components/Circles';
import { Bulb } from '../components/Bulb';
import { TopLeftImg } from '../components/TopLeftImg';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


export default function Testimonials() {
	return (
		<TestimonialContainer>
			<Circles />
			<Bulb />
			<TopLeftImg />


			<TestimonialContent>
				<motion.div className='container'initial='hidden' variants={fadeIn('down', 0.5)} animate='show' exit={'hidden'}>

					<h2> What clients <span>say.</span></h2>

				</motion.div>
				<TestimonialSlider />

			</TestimonialContent>

		</TestimonialContainer>
	);
}
const TestimonialContainer = styled.main`
width: 100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
gap:4rem;
height:100%;

`;

const TestimonialContent = styled.div`
height: calc(100vh - 60px);
display: flex;
gap: 3rem;
flex-direction: column;
justify-content: center;
z-index: 10;





@media (max-width: 1200px){
	height: calc(100vh - 30vh);
	justify-content:space-around;
	flex-direction: column;
	margin: 200px 0;
	.container{
	text-align: center;

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
@media (max-width: 600px){
	margin-top: 100px;
	margin-bottom: 160px;



}
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


`;