'use client';
import { Nav } from './components/Nav';
import { Header } from './components/Header';

import { AnimatePresence, motion } from 'framer-motion';
import { Transtition } from './components/Transition';
import { GlobalStyles } from './globalStyles';
import StyledComponentsRegistry from './lib/registry';
import { usePathname } from 'next/navigation';
import { roboto } from './fonts';
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<html lang="en">
			<body className={roboto.className} >

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
