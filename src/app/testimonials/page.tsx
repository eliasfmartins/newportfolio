'use client';

import styled from 'styled-components';
import { TestimonialSlider } from '../components/TestimonialSllider copy 2';


export default function Testimonials() {
	return (
		<TestimonialContainer>
			<TestimonialContent>
				<div className='container'>

					<h2> What clients <span>say.</span></h2>

				</div>
				<TestimonialSlider />

			</TestimonialContent>
		</TestimonialContainer>
	);
}
export const TestimonialContainer = styled.main`
width: 100%;
height:auto;
display:flex;
flex-direction:column;
justify-content:space-around;
gap:4rem;
height:100%;

`;

export const TestimonialContent = styled.div`
height: calc(100vh - 60px);
display: flex;
flex-direction: column;
justify-content: center;



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
@media (max-width: 600px){
	margin: 120px 0;



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