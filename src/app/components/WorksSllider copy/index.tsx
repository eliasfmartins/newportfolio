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

export const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			freeMode={true}
			pagination={{
				clickable: true
			}}
			modules={[Pagination]}
			style={{ height: 380 }}
		>

			{
				workSlides.slides.map((slide, index) => {
					return (

						<SwiperSlide key={index}>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								{slide.images.map((img, index) => {
									return (<div key={index}>
										<div>
											<Image src={img.path} width={500} height={300} alt='**' />
										</div>
									</div>);
								})}
							</div>
						</SwiperSlide>
					);
				})
			}
		</Swiper>
	);
};