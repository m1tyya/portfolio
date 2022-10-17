import { CSS, styled } from '@/styles';

type DescriptionProps = {
	children: React.ReactNode,
	position: CSS,
};

const DescriptionStyled = styled('p', {
	color: '$secondary-50',
	fontFamily: 'JetBrains Mono Italic',
	fontSize: '$4',
	letterSpacing: '.15rem',
});

const Description = ({ children, position }: DescriptionProps) => (
	<DescriptionStyled css={position}>{children}</DescriptionStyled>
);

export default Description;
