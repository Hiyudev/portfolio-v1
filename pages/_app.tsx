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
			</Head>
			<ThemeWrapper>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeWrapper>
		</Fragment>
	);
}
