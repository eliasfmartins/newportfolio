/* eslint-disable react/no-unescaped-entities */
'use client';
import styled from 'styled-components';
import { Circles } from '../components/Circles';
import { BsArrowRight, BsInstagram } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaGithub, FaLinkedin, FaMailBulk, FaVoicemail } from 'react-icons/fa';

export default function Contact() {
	return (

		<ContactContainer as={motion.div} variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit={'hidden'}>
			<motion.h2>Let's <span>connect.</span></motion.h2>
			<div className='container'>
				<div className='socials'>Linkedin <FaLinkedin size={40} /></div>
				<div className='socials'>GitHub <FaGithub size={40} /></div>
				<div className='socials'>E-mail <FaMailBulk size={40} /></div>
				<div className='socials'>Instagran 	<BsInstagram size={40} /></div>
			</div>
			<Circles />

		</ContactContainer>
	);
}
export const ContactContainer = styled.main`
	max-width: 1200px;
	gap: 2rem;
	height: 100%;


	margin: 0 auto;
	padding: 0 2rem;
	@media(max-width:1300px){
		margin-top: 60px ;
		margin-bottom: 150px ;
	}
	@media(max-width:600px){
		margin-top: 100px ;
		margin-bottom: 150px ;
	}
h2{
	text-align: center;
	font-size: 3rem;
	margin-bottom: 20px;
}
span{
	color: #FF8C00;
	
}

.container{
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	justify-content: space-around;
	height: 90%;
	min-height: 70vh;
	gap: 2rem;

	
}
.socials{
	display: flex;
	border: solid 2px white;
	padding: 15px;
	border-radius: 25px;
	width: 90%;
	max-width: 600px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	font-size: 1.5rem;
}

`;