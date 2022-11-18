import React from 'react';
import { Image } from 'react-native';
// import styles from './styles';

const TabIcon = ({ route, focused, color, size }) => {
	if (!route) return null;
	const source =
		route.name === 'Favorites'
			? focused
				? require('../../assets/star-fill.png')
				: require('../../assets/star-outline.png')
			: require('../../assets/search.png');
	return (
		<Image
			source={source}
			resizeMode="contain"
			style={{ width: size, height: size, tintColor: color + 'aa' }}
		/>
	);
};

export default TabIcon;
