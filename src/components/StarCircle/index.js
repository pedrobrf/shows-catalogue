import { Image, TouchableOpacity, View } from 'react-native';
import { activeIcon, inactiveIcon } from '../../constants/colors';
import { circleButtonSize } from '../../constants/dimensions';
import { elevatedBox, selectedBox, starCircle } from '../../constants/styles';

const StarCircle = ({ fill, onPress, width = circleButtonSize }) => (
	<TouchableOpacity onPress={onPress} style={{ alignSelf: 'flex-end' }}>
		<View
			style={[
				fill ? selectedBox : elevatedBox,
				starCircle,
				{ width: width }
			]}
		>
			<Image
				resizeMode="contain"
				style={{
					width: '100%',
					height: '100%',
					tintColor: fill ? activeIcon : inactiveIcon
				}}
				source={
					fill
						? require('../../assets/star-fill.png')
						: require('../../assets/star-outline.png')
				}
			/>
		</View>
	</TouchableOpacity>
);

export default StarCircle;
