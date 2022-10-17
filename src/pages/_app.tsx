import '@/styles/typography.scss';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { wrapper } from '@/store/store';
import { globalStyles } from '@/styles';


import type { AppProps } from 'next/app';

function MyApp({ Component, ...rest }: AppProps) {
	const { props, store } = wrapper.useWrappedStore(rest);
	globalStyles();

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta content='width=device-width, initial-scale=1' name='viewport' />
				<title>Portfolio</title>
			</Head>

			<Provider store={store}>
				<Component {...props.pageProps} />
			</Provider>
		</>

	);
}

export default MyApp;
