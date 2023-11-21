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

import { BsArrowRight } from 'react-icons/bs';

export const WorkSlider = () => {
	return (
		<Swiper breakpoints={{
			320: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 15,

			},
		}}
			freeMode={true}
			pagination={{

				clickable: true
			}}
			modules={[Pagination]}
			style={{ height: 340 }}
		>

			{
				WorkSlider.slides.map((item, index) => {
					return <SwiperSlide key={index}>
						<div>
							<div>{item.icon}</div>
							<div>

								<div>{item.title}</div>
								<div>{item.description}</div>
							</div>
							<div>
								<RxArrowTopRight />
							</div>
						</div>
					</SwiperSlide>;
				})
			}
		</Swiper>
	);
};