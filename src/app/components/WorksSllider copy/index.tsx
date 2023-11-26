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
import Image from 'next/image';
import styled from 'styled-components';

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
				style={{ height: 380 }}
				className='swipperCarrolsel'
			>

				{
					workSlides.slides.map((slide, index) => {
						return (

							<SwiperSlide key={index}>
								<div className='cards'>
									{slide.images.map((img, index) => {
										return (<div key={index}>
											<div >
												<img src={img.path} className='card' />

												{/* <Image src={img.path} width={500} height={300} alt='**' /> */}
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

@media (max-width: 700px){

	width: 90%;
	.swipperCarrolsel{
		width: 95%;
	}
}
	height: 68%;
	width: 60%;
	margin-right: 25px;
	.swipperCarrolsel{
	/* width:80%; */
	height: 90%;
}
.cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      /* background-color: red; */
			align-items: start;
			gap: 5px;
			
    }

    .card {
      max-width: 98%; /* Garante que o cartão não ultrapasse a largura do contêiner pai */
      height: auto; 
			margin-right:2px;/* Permite que a altura seja ajustada automaticamente para manter as proporções da imagem */
			border-radius: 8px;
    }

   
`;