'use client';

import styled from 'styled-components';
import { ServiceSlider } from '../components/ServiceSllider';

// import { ServiceSlider } from '../components/ServiceSllider';



export default function Services() {
	return (
		<ServicesContainer>
			<div>

				<h2>My Services</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, atque quis. Nam aut illo corrupti earum illum ea ab omnis, id culpa sint dolorem consequatur quos animi, commodi iure ut.</p>
			</div>
			<ServiceSlider />
		</ServicesContainer>
	);
}
export const ServicesContainer = styled.div`
`;