import { styled, theme } from '@/styles';

type SubheadingProps = {
	children: React.ReactNode,
};

const SubheadingStyled = styled('h2', {
	color: '$primary-10',
	fontFamily: 'Mohave',
	fontSize: '$5',
	fontStyle: 'italic',
	fontWeight: '600',
	letterSpacing: '1.5px',
});

const Subheading = ({ children }: SubheadingProps) => (
	<SubheadingStyled>{children}</SubheadingStyled>
);

export default Subheading;
