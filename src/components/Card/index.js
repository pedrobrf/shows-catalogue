import React from 'react';
import { Image, Text, View } from 'react-native';
import RenderHTML from 'react-native-render-html';

import StarCircle from '../StarCircle';

import {
	contentWidth,
	generalPadding,
	posterHeightBig,
	posterHeightSma,
	posterWidthBig,
	posterWidthSma
} from '../../constants/dimensions';
import { elevatedBox } from '../../constants/styles';
import { NO_SUMMARY, SUMMARY } from '../../constants/texts';

const SeriesCard = ({
	itemPoster,
	itemTitle,
	fullItem,
	selected,
	favorited,
	toggleFavorite
}) => (
	<View
		style={{
			...elevatedBox,
			flexDirection: 'column',
			justifyContent: 'space-between'
		}}
	>
		<View style={{ flexDirection: 'row', flexShrink: 1 }}>
			<View
				style={{
					width: selected ? posterWidthBig : posterWidthSma,
					height: selected ? posterHeightBig : posterHeightSma,
					marginRight: generalPadding
				}}
			>
				{!!itemPoster && itemPoster !== 'N/A' && (
					<Image
						resizeMode="contain"
						source={{ uri: itemPoster }}
						style={{
							width: '100%',
							height: '100%'
						}}
					/>
				)}
			</View>
			<View
				style={{
					flexShrink: 1,
					width: '100%',
					justifyContent: selected ? 'space-between' : 'flex-start'
				}}
			>
				<Text>{itemTitle}</Text>
				{!!selected && <Text>{fullItem.genres.join(', ')}</Text>}
				{!!selected && (
					<Text>
						{(fullItem.ended ? 'Aired ' : 'Airs ') +
							fullItem.schedule.days.join(', ') +
							' at ' +
							(fullItem.schedule.time || '--:--')}
					</Text>
				)}
				{!!selected && (
					<StarCircle
						fill={favorited}
						onPress={() => toggleFavorite(!favorited)}
					/>
				)}
			</View>
			{!selected && (
				<StarCircle
					fill={favorited}
					onPress={() => toggleFavorite(!favorited)}
				/>
			)}
		</View>
		{selected && (
			<>
				{fullItem.summary ? (
					<>
						<Text>{SUMMARY}:</Text>
						<RenderHTML
							contentWidth={contentWidth}
							source={{ html: fullItem.summary }}
						/>
					</>
				) : (
					<Text>{NO_SUMMARY}</Text>
				)}
			</>
		)}
	</View>
);

export default SeriesCard;
