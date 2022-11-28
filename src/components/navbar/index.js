import './index.scss';

import { Col, Form, Row } from 'antd';
import CButton from '../button/Button';
import InputSearch from '../input-search/SearchInput';

import logo from '../../assets/logo.png';
// import Link from 'react-router-dom';

const Navbar = () => {
	return (
		//fixed left-0 right-0 z-[10]
		<nav>
			<Row align="middle" className=" bg-[#131D26] h-[80px]">
				<Col xs={2} sm={4} md={6} lg={8} xl={6} className="">
					<div className=" flex justify-center items-center">
						<img src={logo} alt="log" className="w-full max-w-[130px]" />
					</div>
				</Col>
				<Col xs={20} sm={16} md={12} lg={8} xl={12} className="">
					<div className=" flex justify-center items-center">
						<div className="flex w-full max-w-[900px] justify-between items-center">
							<div className="flex space-x-5">
								<div className="text-white-sm">Beranda</div>
								<div className="text-white-sm">Film</div>
								<div className="text-white-sm">Series</div>
								<div className="text-white-sm">Buku</div>
								<div className="text-white-sm">Permainan</div>
							</div>
							<Form className="w-full max-w-[250px]">
								<InputSearch
									onSearch={null}
									placeholder="Telusuri username atau lainnya"
								/>
							</Form>
						</div>
					</div>
				</Col>
				<Col xs={2} sm={4} md={6} lg={8} xl={6} className="">
					<div className=" flex justify-center items-center">
						<CButton type="link" text="Masuk" color="blue" />
						<CButton type="primary" text="Daftar" color="blue" />
					</div>
				</Col>
			</Row>
		</nav>
	);
};

export default Navbar;
