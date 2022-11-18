import {
	generalPadding,
	textSize,
	titleSize
} from '../../constants/dimensions';
import { loweredBox } from '../../constants/styles';

const styles = {
	searchBar: loweredBox,
	welcomeTitle: {
		marginTop: generalPadding,
		fontSize: titleSize,
		fontWeight: 'bold'
	},
	welcomeText: { marginBottom: generalPadding, fontSize: textSize }
};

export default styles;
