import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from '../screens/Search';
import ResultsScreen from '../screens/Results';

import HeaderLeft from '../components/HeaderLeft';
import { SCREEN_NAMES } from '../constants/texts';

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => (
	<SearchStack.Navigator
		screenOptions={navigation => ({
			headerBackTitleVisible: false,
			headerLeft: ({ canGoBack }) =>
				canGoBack ? (
					<HeaderLeft onPress={navigation.navigation.goBack} />
				) : null
		})}
	>
		<SearchStack.Screen
			name="search"
			component={SearchScreen}
			options={{ title: SCREEN_NAMES.search }}
		/>
		<SearchStack.Screen
			name="results"
			component={ResultsScreen}
			options={{ title: SCREEN_NAMES.results }}
		/>
	</SearchStack.Navigator>
);

const Navigator = ({}) => (
	<NavigationContainer>
		<SearchStackScreen />
	</NavigationContainer>
);

export default Navigator;
