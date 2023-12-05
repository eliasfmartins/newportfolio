'use client';
import styled from 'styled-components';
import { Circles } from '../components/Circles';
import { BsInstagram } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { Bulb } from '../components/Bulb';
import Link from 'next/link';

export default function Contact() {
	return (

		<ContactContainer>
			<motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit={'hidden'}>Let's <span>connect.</span></motion.h2>
			<div className='container'>
				<Link
					target="_blank"
					href={'https://www.linkedin.com/in/elias-f-martins/'}
				>
					<motion.div className='socials' variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit={'hidden'}>Linkedin <FaLinkedin size={40} /></motion.div>
				</Link>
				<Link
					target="_blank"
					href={'https://github.com/eliasfmartins'}>
					<motion.div className='socials' variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit={'hidden'}>GitHub <FaGithub size={40} /></motion.div>
				</Link>
				<Link
					target="_blank"
					href={'mailto:eliasmartinsrock84@gmail.com?subject=duvida a respeito do portifolio'}>
					<motion.div className='socials' variants={fadeIn('down', 0.5)} initial='hidden' animate='show' exit={'hidden'}>E-mail <FaMailBulk size={40} /></motion.div>
				</Link>
				<Link
					target="_blank"
					href={'https://www.instagram.com/eliasf.martins/'}>
					<motion.div className='socials' initial='hidden' variants={fadeIn('down', 0.5)} animate='show' exit={'hidden'}>Instagram	<BsInstagram size={40} /></motion.div>
				</Link>
				<Circles />
				<Bulb />
			</div>

		</ContactContainer >
	);
}
const ContactContainer = styled.main`
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
		margin-top: 50px ;
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
a{
	color: white;
	text-decoration:none;
	width:60%;
	display:flex;
	justify-content:center;
}
.socials{
	display: flex;
	border: solid 2px white;
	padding: 15px;
	border-radius: 50px;
	width: 90%;
	max-width: 600px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	font-size: 1.5rem;
	transition: 0.3s;
	z-index: 10;

	&:hover{
		scale: 1.03;
		color: #FF8C00;
		border:solid 2px #FF8C00;
	}
}

`;