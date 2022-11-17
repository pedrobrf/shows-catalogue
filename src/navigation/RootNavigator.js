import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchScreen from '../screens/Search';

import HeaderLeft from '../components/HeaderLeft';
import TabIcon from '../components/TabBarIcon';

import { activeIcon, inactiveIcon } from '../constants/colors';
import { SCREEN_NAMES } from '../constants/texts';

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => (
	<SearchStack.Navigator
		screenOptions={{
			headerBackTitleVisible: false,
			headerLeft: ({ onPress, canGoBack }) =>
				canGoBack ? <HeaderLeft onPress={onPress} /> : null
		}}
	>
		<SearchStack.Screen
			name="search"
			component={SearchScreen}
			options={{ title: SCREEN_NAMES.search }}
		/>
		<SearchStack.Screen
			name="results"
			component={() => null}
			options={{ title: SCREEN_NAMES.results }}
		/>
	</SearchStack.Navigator>
);

const FavesStack = createNativeStackNavigator();

const FavesStackScreen = () => (
	<FavesStack.Navigator>
		<FavesStack.Screen
			name="favorites"
			component={() => null}
			options={{ title: SCREEN_NAMES.favorites }}
		/>
	</FavesStack.Navigator>
);

const Tab = createBottomTabNavigator();

const Navigator = ({}) => (
	<NavigationContainer>
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: activeIcon,
				activeBackgroundColor: activeIcon + '40',
				inactiveTintColor: inactiveIcon,
				inactiveBackgroundColor: activeIcon + '10'
			}}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => (
					<TabIcon
						focused={focused}
						color={color}
						size={size}
						route={route}
					/>
				),
				title: SCREEN_NAMES[route.name],
				headerShown: false
			})}
		>
			<Tab.Screen name="Search" component={SearchStackScreen} />
			<Tab.Screen name="Favorites" component={FavesStackScreen} />
		</Tab.Navigator>
	</NavigationContainer>
);

export default Navigator;
