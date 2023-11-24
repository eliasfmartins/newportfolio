'use client';

import {
	HiHome,
	HiUser,
	HiViewColumns,
	HiRectangleGroup,
	HiChatBubbleBottomCenterText,
	HiEnvelope,
} from 'react-icons/hi2';
import { usePathname, useRouter } from 'next/navigation';
import { LinkCotaniner, NavContainer } from './style';
export const navData = [
	{ name: 'home', path: '/', icon: <HiHome /> },
	{ name: 'about', path: '/about', icon: <HiUser /> },
	{ name: 'services', path: '/services', icon: <HiRectangleGroup /> },
	{ name: 'work', path: '/work', icon: <HiViewColumns /> },
	{
		name: 'testimonials',
		path: '/testimonials',
		icon: <HiChatBubbleBottomCenterText />,
	},
	{
		name: 'contact',
		path: '/contact',
		icon: <HiEnvelope />,
	},
];
export const Nav = () => {
	const pathname = usePathname();
	return (
		<NavContainer>
			<div className="navcontent">
				{navData.map((link, index) => {
					return (
						<LinkCotaniner
							href={link.path}
							key={index}
							className={link.path === pathname ? 'actived' : ''}
						>
							<div className="group">
								<div className="namecontainer">
									<div className="name">{link.name}</div>
									<div className="triangle">

									</div>
								</div>
							</div>
							{link.icon}
						</LinkCotaniner>
					);
				})}
			</div>
		</NavContainer>
	);
};
