import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Separator = vertical => (
	<View style={styles[vertical ? 'separatorVer' : 'separatorHor']} />
);

Separator.protoTypes = {
	vertical: PropTypes.bool
};

export default Separator;
