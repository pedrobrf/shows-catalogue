import {
	generalPadding,
	textSize,
	titleSize
} from '../../constants/dimensions';
import { loweredBox, mainContainer } from '../../constants/styles';

const styles = {
	mainContainer: mainContainer,
	searchBar: loweredBox,
	welcomeTitle: {
		marginTop: generalPadding,
		fontSize: titleSize,
		fontWeight: 'bold'
	},
	welcomeText: { marginBottom: generalPadding, fontSize: textSize }
};

export default styles;
