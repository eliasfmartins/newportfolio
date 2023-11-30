import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonialData = [
	{
		image: '/t-avt-1.png',
		name: 'Anne Smith',
		position: 'Customer',
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
	},
	{
		image: '/t-avt-2.png',
		name: 'Jane Doe',
		position: 'Customer',
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
	},
	{
		image: '/t-avt-3.png',
		name: 'Jhon Doe',
		position: 'Customer',
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
	},
];


import { Pagination, Navigation } from 'swiper/modules';

// import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';
export const TestimonialSlider = () => {
	return (
		<SwipperCarrosel className='carrolsel'>

			<Swiper
				navigation={true}
				spaceBetween={10}
				freeMode={true}
				pagination={{
					clickable: true
				}}
				modules={[Pagination, Navigation]}

				className='swipperCarrolsel'
			>

				{
					testimonialData.map((person, index) => {
						return (

							<SwiperSlide key={index} className='pai'>
								<div className='container'>
									{/*avatar, name, position*/}
									<div className=''>
										<div className='profile'>
											{/*avatar*/}
											<div className='foto'><Image src={person.image} alt="perfil image" width={100} height={100} className='foto' /></div>
											<div>{person.name}</div>
											<div>{person.position}</div>
										</div>
									</div>
									<div className='list'></div>
									<div className='citation'>
										<div className='icon1'><FaQuoteLeft size={30} /></div>
										<div>{person.message}</div>
										<div className='icon2'><FaQuoteRight size={30} /></div>
									</div>
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
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.swipperCarrolsel{
	display: flex;
	gap: 2rem;
	width: 100%;
}
.list{
	height: 100%;
	min-height: 180px;
	width: 3px;
	background: #f0f0f0;
}
.pai{
	display: flex;
	align-items: center;
	justify-content: center;
}
.icon1{
	display: flex;
	justify-content: baseline;
}
.icon2{
	display: flex;
	justify-content: end;
}
.container{
	gap: 2rem;
	display: flex;
	align-items: center;
	width: 90%;
}
.citation{
	display: flex;
	flex-direction: column;
	padding: 25px;
	gap: 1rem;
}
.profile{
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	padding: 25px;
}
.carrolsel{
	background-color: black;
	width: 100%;

}
img.foto{
	width: 100px;
	height: 100px;
	border-radius: 50%;
}


@media (max-width: 1200px){
	margin-right: 0px;
	width: 95%;
	height: auto;
	.swipperCarrolsel{
		width: 100%;
		height:100%;
		
	}
	
}
@media (max-width: 600px){
	.container{
	flex-direction: column;
}
.list{
	display: none;
}
}
@media (min-width: 1201px){
	width: 70%;
	height: auto;
	.swipperCarrolsel{
		margin-right: 200px;
		/* width: 90%; */
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