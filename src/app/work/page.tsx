'use client';

import styled from 'styled-components';
import { WorkSlider } from '../components/WorksSllider copy';






export default function work() {
	return (
		<WorkContainer>
			<div>

				<h2>Works</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, atque quis. Nam aut illo corrupti earum illum ea ab omnis, id culpa sint dolorem consequatur quos animi, commodi iure ut.</p>
				<WorkSlider />

			</div>
		</WorkContainer>
	);
}
export const WorkContainer = styled.main`
	background: url('./site-bg.svg');
	height: 100vh;
`;