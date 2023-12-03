import Link from 'next/link';
import { Bruno_Ace_SC } from 'next/font/google';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HeaderContainer, HeaderContent } from './styles';
const Bruno = Bruno_Ace_SC({ weight: ['400'], subsets: ['latin'] });

export const Header = () => {
	return (
		<HeaderContainer className={Bruno.className}>
			<HeaderContent>

				<h2>
					<span>{'<Elias />'} </span> martins <i>.</i>
				</h2>
				<nav>

					<Link
						target="_blank"
						href={'https://www.instagram.com/eliasf.martins/'}
					>
						<BsInstagram size={30} />
					</Link>

					<Link
						//facebook sla  e github
						target="_blank"
						href={'https://www.instagram.com/eliasf.martins/'}
					>
						<FaLinkedin size={30} />
					</Link>
					<Link
						//facebook sla  e github
						target="_blank"
						href={'https://www.instagram.com/eliasf.martins/'}
					>
						<FaGithub size={30} />
					</Link>
				</nav>
			</HeaderContent>
		</HeaderContainer>
	);
};
