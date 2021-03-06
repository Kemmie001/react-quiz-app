import React from 'react';
import PropTypes from 'prop-types';

function FeedBackStats({ feedback }) {

	// Calculate ratings average
	let average = feedback.reduce((acc, cur) => {
		return acc + cur.rating
	}, 0) / feedback.length
	average = average.toFixed(1).replace(/[.,]0$/, '')
	return (
		<div>
			<div className="feedback-stats">
				<h4>{feedback.length} Reviews</h4>
				<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
			</div>
		</div>
	);
}

FeedBackStats.propTypes = {
	feedback: PropTypes.array
}
export default FeedBackStats;

