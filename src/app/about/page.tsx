/* eslint-disable react/jsx-key */
'use client';
import { useState } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaWordpress } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobexd, SiFramer, SiNextdotjs } from 'react-icons/si';
import { AboutContainer, AboutContent } from './style';
import { Circles } from '../components/Circles';
import { Bulb } from '../components/Bulb';
import { fadeIn } from '../variants';
const aboutData = [
	{
		title: 'skills',
		info: [
			{
				title: 'Web Development',
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
				title: 'UI/UX Design',
				icons: [<FaFigma size={30} />, <SiAdobexd size={30} />, <SiAdobephotoshop size={30} />],
			},
		],
	},
	{
		title: 'awards',
		info: [
			{
				title: 'Webby Awards - Honoree',
				stage: '2011 - 2012',
			},
			{
				title: 'Adobe Design Achievement Awards - Finalist',
				stage: '2009 - 2010',
			},
		],
	},
	{
		title: 'experience',
		info: [
			{
				title: 'UX/UI Designer - XYZ Company',
				stage: '2012 - 2023',
			},
			{
				title: 'Web Developer - ABC Agency',
				stage: '2010 - 2012',
			},
			{
				title: 'Intern - DEF Corporation',
				stage: '2008 - 2010',
			},
		],
	},
	{
		title: 'credentials',
		info: [
			{
				title: 'Web Development - ABC University, LA, CA',
				stage: '2011',
			},
			{
				title: 'Computer Science Diploma - AV Technical Institute',
				stage: '2009',
			},
			{
				title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
				stage: '2006',
			},
		],
	},
];
export default function About() {
	const [index, setIndex] = useState(0);
	//impoortar circle
	return (
		<AboutContainer>
			<Circles />
			<Bulb />

			<AboutContent>



				<motion.div className="about" initial={'hidden'} exit={'hidden'} variants={fadeIn('down', (0.5))} animate={'show'} >
					<h2>About <span>me . </span></h2>
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

								<CountUp start={-5} end={2} duration={5} /> +
							</h2>
							YEARS OF <br />
							EXPERIENCE
						</div>
						<div className='count'>
							<h2>

								<CountUp start={0} end={10} duration={5} /> +
							</h2>
							SATIFESCT <br />
							CLIENTS
						</div>
						<div className='count'>
							<h2>

								<CountUp start={0} end={40} duration={5} /> +
							</h2>
							FINISHED <br />
							PROJECTS
						</div>
						<div className='count'>
							<h2>

								<CountUp start={0} end={10} duration={5} /> +
							</h2>
							WINNING <br />
							AWARDS
						</div>
					</div>
				</motion.div>
				<motion.div className="container" initial={'hidden'} exit={'hidden'} variants={fadeIn('up', (0.5))} animate={'show'}>
					<div className="skills">
						{aboutData.map((item, itemIndex) => {
							return (
								<div key={itemIndex} onClick={() => setIndex(itemIndex)} className={index === itemIndex ? 'on' : 'defalt'}>
									<h3>
										{item.title}

									</h3>
								</div>
							);
						})}
					</div>
					{aboutData[index].info.map((item, itemIndex) => {
						return (
							<div key={itemIndex} className="aboutskill" >
								<div >{item.title}</div>
								<div>-</div>

								<div className="icons">{item.stage}</div>
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