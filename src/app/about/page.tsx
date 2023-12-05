/* eslint-disable react/jsx-key */
'use client';
import { useState } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiFramer, SiNextdotjs } from 'react-icons/si';
import { AboutContainer, AboutContent } from './style';
import { Circles } from '../components/Circles';
import { Bulb } from '../components/Bulb';
import { fadeIn } from '../variants';
import { TopLeftImg } from '../components/TopLeftImg';
const aboutData = [
	{
		title: 'habilidades',
		info: [
			{
				title: 'Front-end Development',
				icons: [
					<FaHtml5 size={30} />,
					<FaCss3 size={30} />,
					<FaJs size={30} />,
					<FaReact size={30} />,
					<SiNextdotjs size={30} />,
					<SiFramer size={30} />,
				],
			},
			{
				title: 'back-end Development',
				icons: [<FaPython size={30} />, <FaNodeJs size={30} />],
			},
			{
				title: 'UI/UX Design',
				icons: [<FaFigma size={30} />],
			},
		],
	},

	{
		title: 'experiência',
		info: [
			{
				title: 'Desenvolvedor Full Stack - Defensoria Pública do DF',
				stage: '2023 - atual',
			},

		],
	},
	{
		title: 'credenciais',
		info: [
			{
				title: 'Sistemas da Informação - Faculdade Estácio-Sa - Cursando',
				// stage: 'cursando',
			},
			{
				title: 'Curso de JavaScript e TypeScript Básico ao Avançado - Udemy - Cursando',
				// stage: 'cursando',
			},
			{
				title: 'Curso de React.JS e Next.JS- Udemy - Cursando',
				// stage: '',
			},
			{
				title: 'Curso de Python Básico ao Avançado - Udemy - Cursando',
				// stage: 'cursando',
			},
			// {
			// 	title: 'Curso de Django Web Framework e Django Rest Framework (DRF) - Udemy',
			// 	stage: 'cursando',
			// },
		],
	},
];
interface InfoItem {
	title: string;
	stage?: string;
	icons?: JSX.Element[];
}

interface AboutDataItem {
	title: string;
	info: InfoItem[];
}
export default function About() {
	const [index, setIndex] = useState(0);
	return (
		<AboutContainer>
			<TopLeftImg />
			<Bulb />
			<Circles />

			<AboutContent>



				<motion.div className="about" initial={'hidden'} exit={'hidden'} variants={fadeIn('down', (0.5))} animate={'show'} >
					<h2>Sobre <span>mim. </span></h2>
					<p>Estudante de Sistemas da Informação
						apaixonado por desenvolvimento web e com foco em front-end, onde
						possuo habilidades sólidas em TypeScript, React e Next.js. Além disso,
						estou em constante aprendizado, explorando Python com Django e
						Node.js para o desenvolvimento back-end. Atualmente, estou adquirindo
						experiência como estagiário de desenvolvimento front-end na Defensoria
						Pública do Distrito Federal, onde aprimoro minhas habilidades diariamente.
						Estou ansioso para iniciar minha carreira como desenvolvedor júnior ou
						trainee, e estou aberto a oportunidades que me permitam crescer e
						contribuir ativamente para projetos desafiadores
					</p>
					<div className='counts'>
						<div className='count'>
							<h2>

								<CountUp start={-5} end={2} duration={6} /> +
							</h2>
							ANOS DE <br />
							EXPERIENCIA
						</div>
						<div className='count'>
							<h2>

								<CountUp start={0} end={10} duration={8} /> +
							</h2>
							CLIENTES <br />
							SATISFEITOS
						</div>
						<div className='count'>
							<h2>

								<CountUp start={0} end={40} duration={7} /> +
							</h2>
							PROJETOS <br />
							FINALIZADOS
						</div>

					</div>
				</motion.div>
				<motion.div className="container" initial={'hidden'} exit={'hidden'} variants={fadeIn('up', (0.5))} animate={'show'}>
					<div className="skills">
						{aboutData[index].info.map((item: InfoItem, itemIndex: number) => (
							<div key={itemIndex} className="aboutskill">
								<div>{item.title}</div>
								{('stage' in item) && <div className="icons">{(item as { title: string; stage: string }).stage}</div>}
								<div className="pao">
									{item.icons?.map((icon: JSX.Element, innerItemIndex: number) => (
										<div className="icon" key={innerItemIndex}>{icon}</div>
									))}
								</div>
							</div>
						))}
					</div>
					{aboutData[index].info.map((item, itemIndex) => {
						return (
							<div key={itemIndex} className="aboutskill" >
								<div >{item.title}</div>

								{item.stage && <div className="icons">{item.stage}</div>}
								<div className='pao'>

									{item.icons?.map((icon, itemIndex) => {
										return <div className='icon' key={itemIndex} >{icon}</div>;
									})}
								</div>
							</div>
						);
					})}


				</motion.div>



			</AboutContent>
		</AboutContainer >
	);
}