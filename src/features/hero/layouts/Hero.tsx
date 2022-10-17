import { styled } from '@/styles';

import Animation from '../components/Animation';

import IconsBackground from './IconsBackground';
import Title from './Title';

const HeroStyled = styled('main', {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-evenly',
	minHeight: '100vh',
	padding: '0rem 12%',
	position: 'relative',
	'@minLg': {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

const Hero = () => (
	<>
		<HeroStyled>
			<Title />
			<Animation />
		</HeroStyled>
		<IconsBackground />
	</>

);

export default Hero;
