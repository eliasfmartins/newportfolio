/* eslint-disable react/jsx-key */
'use client';
import { useState } from 'react';
import CountUp from 'react-countup';
import motion from 'framer-motion';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaWordpress } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobexd, SiFramer, SiNextdotjs } from 'react-icons/si';
import { AboutContainer, AboutContent } from './style';
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
					<FaWordpress size={30} />,
				],
			},
			{
				title: 'UI/UX Design',
				icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
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
			<AboutContent>

				<div className="about" >
					<h2>Captivating</h2>
					<p>Lorem ipsum dolor, sit <span>teste aqui</span>amet consectetur adipisicing elit. Deleniti tenetur, optio voluptatum mollitia autem neque ullam culpa repellendus dicta, qui nihil laborum! Itaque quo nam obcaecati totam expedita nihil aliquid!</p>
					<div>
						<CountUp start={0} end={10} duration={5} />
						<CountUp start={0} end={1000} duration={5} style={{ color: 'red', fontWeight: 'bolder', fontSize: '2rem' }} />
					</div>
					<CountUp start={0} end={1000} duration={5} />
				</div>
				<div className="container">
					<div>
						<div className="skills">
							{aboutData.map((item, itemIndex) => {
								return (
									<div key={itemIndex} onClick={() => setIndex(itemIndex)} className={index === itemIndex ? 'on' : 'defalt'}>
										<h2>
											{item.title}

										</h2>
									</div>
								);
							})}
						</div>
						<div>{aboutData[index].info.map((item, itemIndex) => {
							return (
								<div key={itemIndex} className="aboutskill" >
									<div >{item.title}</div>
									<div>-</div>
									<div className="icons">

										<div className="icons">{item.stage}</div>
										{item.icons?.map((icon, itemIndex) => {
											return <div key={itemIndex} >{icon}</div>;
										})}
									</div>
								</div>
							);
						})}</div>
					</div>

				</div>

			</AboutContent>
		</AboutContainer >
	);
}