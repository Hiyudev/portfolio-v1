import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../src/styles/global';
import { ThemeWrapper } from '../src/hooks/useTheme';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Head>
				<title>Yuki&apos;s portfolio</title>
				<meta name="title" content="Yuki's portfolio" />
				<meta
					name="description"
					content="Hi ! I'm Yuki, a self-taught developer passionate about the technology world"
				/>
				<meta
					name="keywords"
					content="yuki2dev, keyshd, portfolio, github, programmer, developer"
				/>
				<link rel="icon" type="image/png" href="./favicon.ico" />

				<meta name="theme-color" content="#09090D" />

				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://portfolio-yuki2dev.vercel.app/"
				/>
				<meta property="og:title" content="Yuki's portfolio" />
				<meta
					property="og:description"
					content="Hi ! I'm Yuki, a self-taught developer passionate about the technology world"
				/>
				<meta
					property="og:image"
					content="https://portfolio-yuki2dev.vercel.app/banner.png"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://portfolio-yuki2dev.vercel.app/"
				/>
				<meta property="twitter:title" content="Yuki's portfolio" />
				<meta
					property="twitter:description"
					content="Hi ! I'm Yuki, a self-taught developer passionate about the technology world"
				/>
				<meta
					property="twitter:image"
					content="https://portfolio-yuki2dev.vercel.app/banner.png"
				></meta>
			</Head>
			<ThemeWrapper>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeWrapper>
		</Fragment>
	);
}
