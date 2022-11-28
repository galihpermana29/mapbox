import './index.scss';
import React from 'react';
import { Input } from 'antd';

/**
 * Input of the web
 * @param {requestCallback} onSearch onSearch function
 * @param {string} placeholder  placeholder of the input
 * @returns
 */

const InputSearch = ({ onSearch, placeholder = 'Telusuri' }) => {
	return <Input placeholder={placeholder} onSearch={onSearch} />;
};

export default InputSearch;
