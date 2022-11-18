import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, View, Text } from 'react-native';
import Separator from '../../components/Separator';
import {
	SEARCH_BUTTON,
	SEARCH_ERROR_TEXT,
	SEARCH_ERROR_TITLE,
	WELCOME_TEXT,
	WELCOME_TITLE
} from '../../constants/texts';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import PrimaryButton from '../../components/Buttons';
import Container from '../../components/Containers';

const SearchScreen = ({ navigation }) => {
	const [searchParam, setsearchParam] = useState('');

	const checkProceed = () => {
		if (searchParam.length < 3)
			return Alert.alert(SEARCH_ERROR_TITLE, SEARCH_ERROR_TEXT);
		navigation.navigate('results', { search: searchParam });
	};

	return (
		<Container>
			<Text style={styles.welcomeTitle}>{WELCOME_TITLE}</Text>
			<Text style={styles.welcomeText}>{WELCOME_TEXT}</Text>
			<Separator vertical />
			<SearchBar
				text={searchParam}
				setText={text => setsearchParam(text)}
				submit={checkProceed}
			/>
			<Separator vertical />
			<PrimaryButton text={SEARCH_BUTTON} onPress={checkProceed} />
		</Container>
	);
};

SearchScreen.propTypes = {
	navigation: PropTypes.object
};

export default SearchScreen;
