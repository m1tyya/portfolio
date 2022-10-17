import { Head, Html, Main, NextScript } from 'next/document';

import { getCssText } from '@/styles';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<style dangerouslySetInnerHTML={{ __html: getCssText() }} id='stitches' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
