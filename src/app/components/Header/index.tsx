import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HeaderContainer, HeaderContent } from './styles';
import { bruno } from '@/app/fonts';

export const Header = () => {
	return (
		<HeaderContainer className={bruno.className}>
			<HeaderContent>

				<h2>
					<span>{'<Elias />'} </span> martins <i>.</i>
				</h2>
				<nav>
					<Link
						//facebook sla  e github
						target="_blank"
						href={'https://www.linkedin.com/in/elias-f-martins/'}
					>
						<FaLinkedin size={30} />
					</Link>
					<Link
						//facebook sla  e github
						target="_blank"
						href={'https://github.com/eliasfmartins/'}
					>
						<FaGithub size={30} />
					</Link>
					<Link
						target="_blank"
						href={'https://www.instagram.com/eliasf.martins/'}
					>
						<BsInstagram size={30} />
					</Link>
				</nav>
			</HeaderContent>
		</HeaderContainer>
	);
};
