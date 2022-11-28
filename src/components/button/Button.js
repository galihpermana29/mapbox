import './index.scss';
import { Button } from 'antd';

/**
 * Button of the web
 * @param {string} type  type of the button, it can primary | ghost
 * @param {string} text  text of the button
 * @param {string} color type of color, orange | white | blue
 * @returns
 */

const CButton = ({ type = 'primary', text = 'Click', color = 'orange' }) => {
	return (
		<Button type={type} className={color}>
			{text}
		</Button>
	);
};

export default CButton;
