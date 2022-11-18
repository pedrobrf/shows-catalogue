import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { View, FlatList, TouchableOpacity, Alert, Text } from 'react-native';

import Container from '../../components/Containers';
import SeriesCard from '../../components/Card';

import { generalPadding } from '../../constants/dimensions';
import {
	NO_RESULTS,
	SEARCH_ERROR_TITLE,
	STORAGE_FAVORITES
} from '../../constants/texts';

import { searchName } from '../../services/requests';

const ResultsScreen = ({ navigation, route }) => {
	const [movies, setMovies] = useState([]);
	const [selected, setSelected] = useState(-1);
	const [favorites, setFavorites] = useState([]);
	const { search } = route.params;

	const readfromFavorites = () =>
		AsyncStorage.getItem(STORAGE_FAVORITES).then(r =>
			setFavorites(JSON.parse(r))
		);

	const saveFavorites = list =>
		AsyncStorage.setItem(STORAGE_FAVORITES, JSON.stringify(list));

	const addFavorite = item => {
		const newList = { ...favorites };
		newList[item.show.id] = {
			itemPoster: item.show.image.medium,
			itemTitle: item.show.name,
			fullItem: item.show
		};
		saveFavorites(newList);
		setFavorites(newList);
	};

	const removeFavorite = item => {
		const newList = { ...favorites };
		delete newList[item.show.id];
		saveFavorites(newList);
		setFavorites(newList);
	};

	const performSearch = () => {
		searchName(search).then(r => {
			if (!r?.data)
				return Alert.alert(SEARCH_ERROR_TITLE, NO_RESULTS, [
					{ text: 'Ok', onPress: () => navigation.goBack() }
				]);
			setMovies(r?.data);
		});
	};

	useFocusEffect(
		useCallback(() => {
			readfromFavorites();
			return () => {};
		}, [])
	);

	useEffect(() => {
		performSearch();
		return () => {};
	}, []);

	return (
		<Container>
			<FlatList
				data={movies}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						activeOpacity={1}
						onPress={() =>
							selected == index
								? setSelected(-1)
								: setSelected(index)
						}
					>
						<SeriesCard
							itemPoster={item.show.image.medium}
							itemTitle={item.show.name}
							fullItem={item.show}
							selected={index == selected}
							favorited={!!favorites[item.show.id]}
							toggleFavorite={add =>
								add ? addFavorite(item) : removeFavorite(item)
							}
						/>
					</TouchableOpacity>
				)}
				ItemSeparatorComponent={() => (
					<View style={{ height: generalPadding }} />
				)}
			/>
		</Container>
	);
};

export default ResultsScreen;
