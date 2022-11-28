import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'antd/dist/antd.min.css';
import Navbar from './components/navbar';
import Home from './pages/home/Home';

function App() {
	return (
		<div>
			<Navbar />
			<div className="main min-h-[90vh]">
				<Home />
			</div>
		</div>
	);
}

export default App;
