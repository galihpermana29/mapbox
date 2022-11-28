import { Col, Row } from 'antd';
import Trending from '../../components/trending';
import Mapboxes from '../map/Mapboxes';

const Home = () => {
	return (
		<section>
			<Row>
				<Col xs={2} sm={4} md={6} lg={8} xl={6}></Col>
				<Col xs={20} sm={16} md={12} lg={8} xl={12}>
					<div className="flex justify-center items-center">
						<Trending />
					</div>
				</Col>
				<Col xs={2} sm={4} md={6} lg={8} xl={6}></Col>
			</Row>
			<Row className="border-2 w-full">
				<Mapboxes />
			</Row>
			{/* <Col span={12} offset={6}>
				
			</Col> */}
		</section>
	);
};

export default Home;
