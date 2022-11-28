import './index.scss';

import { Carousel } from 'antd';

import film1 from '../../assets/film-dummy/film1.png';
import film2 from '../../assets/film-dummy/film2.png';
import film3 from '../../assets/film-dummy/film3.png';
import film4 from '../../assets/film-dummy/film4.png';
import film5 from '../../assets/film-dummy/film5.png';

const dummyData = [
	[
		{
			img: film1,
		},
		{
			img: film2,
		},
		{
			img: film3,
		},
		{
			img: film4,
		},
		{
			img: film5,
		},
	],
	[
		{
			img: film4,
		},
		{
			img: film2,
		},
		{
			img: film5,
		},
		{
			img: film1,
		},
		{
			img: film3,
		},
	],
];

const Trending = ({ data = dummyData }) => {
	const MapImg = ({ data }) => {
		return (
			<div className="flex space-x-3">
				{data.map(({ img }, idx) => (
					<div key={idx}>
						<img src={img} alt={img} className="w-full" />
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="max-w-[900px] card-wrapper border-2 w-full">
			<Carousel autoplay>
				{data.map((d, idx) => (
					<MapImg data={d} key={idx} />
				))}
			</Carousel>
		</div>
	);
};

export default Trending;
