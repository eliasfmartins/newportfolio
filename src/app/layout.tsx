'use client';
import { Sora } from 'next/font/google';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { Transtition } from './components/Transition';
import { GlobalStyles } from './globalStyles';
import StyledComponentsRegistry from './lib/registry';
import { usePathname } from 'next/navigation';
import { url } from 'inspector';
import styled from 'styled-components';

const sora = Sora({
	subsets: ['latin'],
	variable: '--font-sora',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<html lang="en">
			<BodyContainer className={sora.className}  >

				<StyledComponentsRegistry>

					<AnimatePresence mode="wait">
						<Transtition key={pathname} />
						<motion.div >
							<Nav />
							<Header />
							{children}
						</motion.div>
					</AnimatePresence>
					<GlobalStyles />
				</StyledComponentsRegistry>
			</BodyContainer>
		</html >
	);
}
export const BodyContainer = styled.body`
	background-image: url('../../public/396752118_6817117885001262_5533264637461018190_n.jpg');
`;