import Description from '@/components/description';
import Heading from '@/components/heading';
import Subheading from '@/components/subheading';
import { CSS } from '@/styles';

const positionHeading: CSS = {
	marginTop: '$1',
};

const positionDesc: CSS = {
	marginTop: '$1',
	maxWidth: '25ch',
};

const Title = () => (
	<div>
		<Subheading>Web Developer</Subheading>
		<Heading position={positionHeading}>Dymytriy Vykhodets</Heading>
		<Description position={positionDesc}>Bring quality products into web space</Description>
	</div>
);

export default Title;
