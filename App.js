import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_FAVORITES } from './src/constants/texts';
import Navigator from './src/navigation/RootNavigator';

const defKeys = [{ key: STORAGE_FAVORITES, value: '{}' }];

const initStorage = (keys = defKeys) => {
	keys.forEach(element => {
		AsyncStorage.getItem(element.key)
			.then(r => {
				if (!r) AsyncStorage.setItem(element.key, element.value);
			})
			.catch(e => AsyncStorage.setItem(element.key, element.value));
	});
};

const App = ({}) => {
	useEffect(initStorage, []);

	return (
		<>
			<Navigator />
		</>
	);
};

export default App;
