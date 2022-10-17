import { CSS, styled } from '@/styles';

type HeadingProps = {
	children: React.ReactNode,
	position: CSS,
};

const HeadingStyled = styled('h1', {
	color: '$text-50',
	fontFamily: 'Modernist',
	fontSize: '$7',
	fontWeight: 'bold',
	letterSpacing: '2.5px',
	lineHeight: '$base',
	variants: {
	},
});

const Heading = ({ children, position }: HeadingProps) => (
	<HeadingStyled
		css={position}
	>
		{children}
	</HeadingStyled>
);

export default Heading;
