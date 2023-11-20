'use client';
import { Sora } from 'next/font/google';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { Transtition } from './components/Transition';
import { GlobalStyles } from './globalStyles';
import StyledComponentsRegistry from './lib/registry';

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
	return (
		<html lang="en">
			<body className={sora.className}>
				<StyledComponentsRegistry>

					<AnimatePresence mode="wait">
						<Transtition />
						<motion.div>
							<Nav />
							<Header />
							{children}
						</motion.div>
					</AnimatePresence>
					<GlobalStyles />
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
