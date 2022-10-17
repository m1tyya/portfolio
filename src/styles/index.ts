import { createStitches, keyframes } from '@stitches/react';

import type * as Stitches from '@stitches/react';

export const orbit = keyframes({
	from: { transform: 'rotate(0deg) translateX(10rem)' },
	to: { transform: 'rotate(360deg) translateX(10rem)' },
});

export const meditation = keyframes({
	from: {},
	to: { transform: 'translateY(2rem)' },
});

export const { config, createTheme, css, getCssText, globalCss, styled, theme } = createStitches({
	media: {
		maxLg: '(max-width: 1199px)',
		maxMd: '(max-width: 991px)',
		maxSm: '(max-width: 767px)',
		maxXl: '(max-width: 1399px)',
		maxXs: '(max-width: 639px)',
		minLg: '(min-width: 1200px)',
		minMd: '(min-width: 992px)',
		minSm: '(min-width: 768px)',
		minXl: '(min-width: 1400px)',
		minXs: '(min-width: 640px)',
	},
	theme: {
		colors: {
			background: 'hsl(250 10% 14%)',
			'blue-10': '#E0FDEB',
			'blue-20': '#C2FCDE',
			'blue-30': '#A2F8D3',
			'blue-40': '#88F1CF',
			'blue-50': '#62E9CA',
			'blue-60': '#47C8B7',
			'blue-70': '#31A7A3',
			'blue-80': '#1F8187',
			'blue-90': '#12616F',
			'primary-10': '#FDDEF6',
			'primary-20': '#FBBDF2',
			'primary-30': '#F59AEF',
			'primary-40': '#EA7FEC',
			'primary-50': '#D356E0',
			'primary-60': '#A93EC0',
			'primary-70': '#832BA1',
			'primary-80': '#5F1B81',
			'primary-90': '#45106B',
			'secondary-10': '#FDFCE1',
			'secondary-20': '#FCF8C4',
			'secondary-30': '#F6F0A5',
			'secondary-40': '#EEE58B',
			'secondary-50': '#E3D766',
			'secondary-60': '#C3B64A',
			'secondary-70': '#A39633',
			'secondary-80': '#837720',
			'secondary-90': '#6C6013',
			'text-10': '#FEFEFE',
			'text-20': '#FDFDFD',
			'text-30': '#F9F9F9',
			'text-40': '#F4F4F4',
			'text-50': '#EDEDED',
		},
		fontSizes: {
			1: 'clamp(1.02rem, 0.13vw + 0.97rem, 1.13rem)',
			2: 'clamp(1.28rem, 0.28vw + 1.17rem, 1.5rem)',
			base: 'clamp(1.6rem, 0.5vw + 1.4rem, 2rem)',
			// eslint-disable-next-line sort-keys-fix/sort-keys-fix
			4: 'clamp(2rem, 0.83vw + 1.67rem, 2.66rem)',
			5: 'clamp(2.5rem, 1.3vw + 1.98rem, 3.54rem)',
			6: 'clamp(3.13rem, 1.98vw + 2.33rem, 4.71rem)',
			7: 'clamp(3.91rem, 2.94vw + 2.73rem, 6.26rem)',
			8: 'clamp(4.88rem, 4.3vw + 3.16rem, 8.32rem)',
			9: 'clamp(6.1rem, 6.21vw + 3.62rem, 11.07rem)',
			10: 'clamp(7.63rem, 8.87vw + 4.08rem, 14.72rem)',
		},
		lineHeights: {
			base: 'calc(4px + 2ex)',
		},
		space: {
			1: '1rem',
			2: '1.5rem',
			3: '2rem',
			4: '2.5rem',
			5: '3rem',
			6: '3.5rem',
			7: '4rem',
			8: '4.5rem',
			9: '5rem',
			10: '6rem',
		},
	},
	utils: {
		size: value => ({
			height: value,
			width: value,
		}),
	},
});

export const globalStyles = globalCss({
	'*, *::before, *::after': {
		boxSizing: 'border-box',
	},
	':root': {
		fontSize: '62.5%',
	},
	body: {
		backgroundColor: '$background',
		fontSize: '1.6rem',
		lineHeight: 1,
		minHeight: '100vh',
	},
	'html,body,div, span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video':
		{
			border: 0,
			font: 'inherit',
			margin: 0,
			padding: 0,
		},
});

export type CSS = Stitches.CSS<typeof config>;
