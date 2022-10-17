import { CSS, styled } from '@/styles';

export type SvgIconProps = {
	position: CSS,
	svg: any,
};

export const SvgIconStyled = styled('svg', {
	variants: {
		size: {
			sm: {
				size: '3rem',
			},
			md: {
				size: '4rem',
			},
			lg: {
				size: '5rem',
			},

		},
	},
});

const SvgIcon = ({ position, svg }: SvgIconProps) => (
	<SvgIconStyled
		css={{ ...position }}

		fill={'hsl(0 100% 100% / 0.5)'}
		size={{
			'@initial': 'sm',
			'@minMd': 'md',
			'@minLg': 'lg',
		}} >
		{svg}
	</SvgIconStyled>
);

export default SvgIcon;
