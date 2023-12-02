import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const workSlides = {
	slides: [
		{
			images: [
				{
					title: 'title',
					path: '/thumb1.jpg',
				},
				{
					title: 'title',
					path: '/thumb2.jpg',
				},
				{
					title: 'title',
					path: '/thumb3.jpg',
				},
				{
					title: 'title',
					path: '/thumb4.jpg',
				},
			],
		},
		{
			images: [
				{
					title: 'title',
					path: '/thumb4.jpg',
				},
				{
					title: 'title',
					path: '/thumb1.jpg',
				},
				{
					title: 'title',
					path: '/thumb2.jpg',
				},
				{
					title: 'title',
					path: '/thumb3.jpg',
				},
			],
		},
	],
};


import { Pagination } from 'swiper/modules';

// import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/variants';

export const WorkSlider = () => {
	return (
		<SwipperCarrosel>

			<Swiper
				spaceBetween={10}
				freeMode={true}
				pagination={{
					clickable: true
				}}
				modules={[Pagination]}

				className='swipperCarrolsel' 
			>

				{
					workSlides.slides.map((slide, index) => {
						return (

							<SwiperSlide key={index}>
								<div className='cards'>
									{slide.images.map((img, index) => {
										return (<div key={index} className='cardContainer'>
											<div className='card'>
												<div className="background">
												</div>
												<img src={img.path} className='card' />
												<div className="text">Biscoito</div>
											</div>
										</div>);
									})}
								</div>
							</SwiperSlide>
						);
					})
				}
			</Swiper>
		</SwipperCarrosel>
	);
};
export const SwipperCarrosel = styled.div`
	margin-bottom: 40px;


@media (max-width: 1200px){
	margin-right: 0px;
	width: 95%;
	height: auto;
	.swipperCarrolsel{
		width: 100%;
		height:100%;

	}

}
@media (min-width: 1201px){
	width: 70%;
	height: auto;
	.swipperCarrolsel{
		margin-right: 200px;
		width: 90%;
		height:100%;

	}

}


	height: 70%;
	width: 60%;
	margin-right: 25px;
	.swipperCarrolsel{
		padding: 5px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content:center;
		

}
.cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 100%; 
			border-radius: 8px;
			gap:6px;
    }
		
		.card {
		max-width: 99%;
		height: auto;
		margin-right: 2px;
		border-radius: 8px;
		overflow: hidden;
		transition: transform 0.3s ease-in-out;
		position: relative;
		&:hover{

		}
		}
		.background {
		width: 99%;
		border-radius: 8px;
		height: 100%;
		background: linear-gradient(to bottom, #FF8C00, #003366);
		z-index: 50;
		position: absolute;
		transition: 0.3s;
		opacity:0 /* Ajustado o seletor para a transição correta */
	}

	.text {
	visibility: hidden;
	position: absolute;
	bottom: 0;
	top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
	transition: 0.3s;
	z-index: 500;
	font-size: 2rem;
	transition-delay: 200ms;
	}

	.card:hover .background {
		height: 99%;
		opacity: 0.7;
		transition: 0.3s;

	}
	.card:hover .text {
		bottom: 45%;
		visibility: visible;
		top: 50%;
  	left: 50%;
  	transform: translate(-50%, -50%);
		transition: 0.3s;


	}
		
	img {
		width: 100%; /* Ajuste conforme necessário */
	}
	
`;