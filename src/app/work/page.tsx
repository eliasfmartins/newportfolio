'use client';

import styled from 'styled-components';
import { WorkSlider } from '../components/WorksSllider copy';






export default function work() {
	return (
		<WorkContainer>
			<WorkContent>
				<div className='container'>

					<h2>Works</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, atque quis. Nam aut illo corrupti earum illum ea ab omnis, id culpa sint dolorem consequatur quos animi, commodi iure ut.</p>
				</div>
				<WorkSlider />

			</WorkContent>
		</WorkContainer>
	);
}
export const WorkContainer = styled.main`
width: 100%;
`;
export const WorkContent = styled.div`
@media (max-width: 1000px){
	flex-direction: column;
	margin: 80px 0;
	.container{
		width: 90%;
	}

}
margin: 0 auto;
height: calc(100vh - 60px);
/* background: red; */
	max-width: 1200px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
.container{
	padding: 25px;
	min-width: 30%;
	/* background: purple; */
	height: 67%;

}

`;