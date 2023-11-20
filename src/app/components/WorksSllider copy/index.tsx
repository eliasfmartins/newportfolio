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
			modules={[FreeMode, Pagination]}
			style={{ height: 340 }}
		>

			{
				serviceData.map((item, index) => {
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