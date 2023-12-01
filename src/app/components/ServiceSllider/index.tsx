import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import {
	RxCrop,
	RxDesktop,
	RxPencil2,
	RxReader,
	RxRocket,
	// RxArrowRight,
	RxArrowTopRight,
} from 'react-icons/rx';

import { FreeMode, Pagination } from 'swiper/modules';
import styled from 'styled-components';
import { Circles } from '../Circles';

const serviceData = [
	{
		icon: <RxCrop />,
		title: 'Branding',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		icon: <RxPencil2 />,
		title: 'Design',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		icon: <RxDesktop />,
		title: 'Development',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		icon: <RxReader />,
		title: 'Copywriting',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		icon: <RxRocket />,
		title: 'SEO',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
];


export const ServiceSlider = () => {
	return (
		<SwipperContainer className='container'>

			<Swiper breakpoints={{
				420: {
					slidesPerView: 1,
					spaceBetween: 15,
					autoHeight: true
				},
				700: {
					slidesPerView: 2,
					spaceBetween: 15,

				},
				1000: {
					slidesPerView: 3,
					spaceBetween: 15,

				},

			}}
				color='red'

				freeMode={true}
				pagination={{
					clickable: true
				}}
				modules={[FreeMode, Pagination]}
				className='containerswipper'
			>


				{serviceData.map((item, index) => {
					return (
						<SwiperSlide key={index} >
							<div className='layer'>
								<div className='iconFirst'><span>
									{item.icon}
								</span>
								</div>
								<div>
									<div>{item.title}</div>
									<div>{item.description}</div>
								</div>
								<div className='iconSwiper'>
									<RxArrowTopRight />
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<Circles />

		</SwipperContainer>
	);
};
export const SwipperContainer = styled.div`
cursor: pointer;
@media (max-width:600){
	.containerswipper{
		height: 350px;
		/* width: 400px; */
		margin-left: -50px;
		width: 140%;
	
	}
	.container{
		color: orange;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.layer{
		align-items: center;
		justify-content: center;
		min-width: 400px;
		width: 90%;
		height: 80%;
		gap: 0;
	}
}
.iconFirst{
	font-size: 3rem;
}
@media(max-width:601px){
	.containerswipper{
	margin: 0 auto;
		height: 280px;
		margin-left: -50px;
		width: 140%;

 }
}
 
 .iconSwiper{
	font-size: 2rem;
 }
 .layer{
	background:  rgba(65, 47, 123, 0.3);
	flex-direction: column;
	justify-content: space-around;
	padding: 10px;
	height: 80%;
	border-radius: 6px;
	display: flex;
  gap: 0.5rem;
 }
`;