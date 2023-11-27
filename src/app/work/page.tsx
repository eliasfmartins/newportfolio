'use client';

import styled from 'styled-components';
import { WorkSlider } from '../components/WorksSllider copy';


export default function work() {
	return (
		<WorkContainer>
			<WorkContent>
				<div className='container'>

					<h2> My Works <span>.</span></h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, atque quis. Nam aut illo corrupti earum illum ea ab omnis, id culpa sint dolorem consequatur quos animi, commodi iure ut.</p>
				</div>
				<WorkSlider />

			</WorkContent>
		</WorkContainer>
	);
}
export const WorkContainer = styled.main`
width: 100%;
height:auto;
display:flex;
flex-direction:column;
justify-content:space-around;
gap:4rem;
height:100%;

`;

export const WorkContent = styled.div`
height: calc(100vh - 60px);
display: flex;
justify-content: baseline;



@media (max-width: 1200px){
	height: calc(100vh - 30vh);
	justify-content:space-around;
	flex-direction: column;
	margin: 80px 0;
	margin-bottom: 210px;
	.container{
		width: 90%;
		justify-content:space-around;

	}
	
}
@media (max-width: 800px){
	margin-bottom: 150px;
	.container{
		width: 90%;
	}

}
@media (max-width: 600px){
	margin-top: 80px;
	margin-bottom: 40px;


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
.container{
	display: flex;
	gap: 4rem;
	flex-direction: column;
	min-width: 35%;
	height: 50%;
	margin-bottom: 50px;
}

`;