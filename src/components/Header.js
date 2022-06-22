import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Header({ text, text2, textColor, bgColor }) {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	}
	return (
		<header style={headerStyles}>
			<div className="container links">
				<h2>
					<Link className="link" to='/'>{text}</Link>
				</h2>
				<h2>
					<Link className="link" to='/Quiz'>{text2}</Link>
				</h2>
			</div>
		</header>
	);
}

Header.defaultProps = {
	text: 'Feedback Website',
	text2: 'Quiz Website',
	bgColor: 'rgba(0, 0, 0, 0.4)',
	textColor: '#ff6a95'
}

Header.propTypes = {
	text: PropTypes.string.isRequired,
	textColor: PropTypes.string,
	bgColor: PropTypes.string,
	text2: PropTypes.string
}

export default Header;

