import Book from '@images/book.svg';
import Code from '@images/code.svg';
import Headphones from '@images/headphones.svg';
import Jogging from '@images/jogging.svg';
import Meditation from '@images/meditation.svg';
import Salad from '@images/salad.svg';

import SvgIcon, { SvgIconProps } from '@/components/icon';
import { CSS, meditation } from '@/styles';

const icons: Array<SvgIconProps> = [
	{
		position: {
			left: '5%',
			top: '12%',
			transform: 'rotate(7deg)',
			'@minLg': {
				top: '22%',
			},
		},
		svg: Jogging,
	},
	{
		position: {
			left: '45%',
			top: '10%',
			transform: 'rotate(-15deg)',
		},
		svg: Code,
	},
	{
		position: {
			left: '85%',
			top: '17%',
			transform: 'rotate(19deg)',
		},
		svg: Headphones,
	},
	{
		position: {
			left: '8%',
			top: '70%',
			transform: 'rotate(-22deg)',
			'@minLg': {
				left: '5%',
				top: '90%',
			},
		},
		svg: Book,
	},
	{
		position: {
			left: '65%',
			top: '50%',
			'@minLg': {
				animation: `${meditation} 2s infinite alternate`,
				left: '40%',
				top: '80%',
			},
		},
		svg: Meditation,
	},
	{
		position: {
			left: '83%',
			top: '90%',
			transform: 'rotate(52deg)',
			'@minLg': {
				top: '85%',
			},
		},
		svg: Salad,
	},
];

const positionIcon: CSS = {
	position: 'absolute',
};

const IconsBackground = () => (
	<>
		{icons.map((icon, index) => (
			<SvgIcon
				key={index}
				position={{ ...positionIcon, ...icon.position }}
				svg={icon.svg()}
			/>
		))}
	</>
);

export default IconsBackground;
