'use client';
import { Roboto } from 'next/font/google';
import { Bruno_Ace_SC } from 'next/font/google';
import { Nav } from './components/Nav';
import { Header } from './components/Header';

import { AnimatePresence, motion } from 'framer-motion';
import { Transtition } from './components/Transition';
import { GlobalStyles } from './globalStyles';
import StyledComponentsRegistry from './lib/registry';
import { usePathname } from 'next/navigation';
const sora = Roboto({ weight: ['100', '400', '700'], subsets: ['latin'] });
const Bruno = Bruno_Ace_SC({ weight: ['400'], subsets: ['latin'] });
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<html lang="en">
			<body className={sora.className} >

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
			</body>
		</html >
	);
}
