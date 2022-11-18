import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ style = styles.container, children }) => (
	<View style={style}>{children}</View>
);

export default Container;
