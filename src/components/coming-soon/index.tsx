import { styled } from '@/styles';

const ComingSoonStyled = styled('footer', {
	color: 'hsl(0 0% 100% / 0.3)',
	fontSize: '$4',
	fontFamily: 'Inter',
	textAlign: 'center',
	margin: '5rem 0',
});

const ComingSoon = () => (
	<ComingSoonStyled>Coming Soon</ComingSoonStyled>
);

export default ComingSoon;
