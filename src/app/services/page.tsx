'use client';

import styled from 'styled-components';
import { ServiceSlider } from '../components/ServiceSllider';

// import { ServiceSlider } from '../components/ServiceSllider';



export default function Services() {
	return (
		<ServicesContainer>
			<ServicesContent>

				<div className='services'>

					<h2>My Services <span>.</span></h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, atque quis. Nam aut illo corrupti earum illum ea ab omnis, id culpa sint dolorem consequatur quos animi, commodi iure ut.</p>
				</div>
				<div className='slider'>

					<ServiceSlider />
				</div>
			</ServicesContent>
		</ServicesContainer>
	);
}
export const ServicesContainer = styled.main`

`;
export const ServicesContent = styled.div`
  min-height: calc(100vh - 60px);
	max-width: 1300px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
    margin: 50px 0;
    display: flex;

    .services {
      width: 90%;
    }

    .slider {
      width: 100%;
    }
  }

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;

  .services {
	 margin-top: -60px;
	 gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 10px;

    @media (min-width: 601px) {
      width: 40%;
    }
  }

  .slider {
    width: 50%;
    align-items: center;
    justify-content: center;
  }

  span {
    color: #FF8C00;
  }

  h2 {
    font-size: 3rem;
  }
`;
