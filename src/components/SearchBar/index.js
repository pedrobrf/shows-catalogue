import { TextInput, View } from 'react-native';
import { SEARCH_PLACEHOLDER } from '../../constants/texts';
import styles from './styles';

const SearchBar = ({ text, setText, submit }) => (
	<View style={styles.searchBar}>
		<TextInput
			placeholder={SEARCH_PLACEHOLDER}
			value={text}
			onChangeText={setText}
			onSubmitEditing={submit}
		/>
	</View>
);
export default SearchBar;
