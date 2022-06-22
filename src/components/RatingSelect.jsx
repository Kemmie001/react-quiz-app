import React from 'react';
import { useState } from 'react'

function RatingSelect({ select }) {
	const [selected, setselected] = useState(4);
	const handleChange = (e) => {
		setselected(+e.currentTarget.value)
		select(+e.currentTarget.value)
	}
	return (
		<div>
			<ul className="rating">
				<li>
					<input type="radio" name="rating" id="num1" value="1" onChange={handleChange} checked={selected === 1} />
					<label htmlFor="num1">1</label>
				</li>
				<li>
					<input type="radio" name="rating" id="num2" value="2" onChange={handleChange} checked={selected === 2} />
					<label htmlFor="num2">2</label>
				</li>
				<li>
					<input type="radio" name="rating" id="num3" value="3" onChange={handleChange} checked={selected === 3} />
					<label htmlFor="num3">3</label>
				</li>
				<li>
					<input type="radio" name="rating" id="num4" value="4" onChange={handleChange} checked={selected === 4} />
					<label htmlFor="num4">4</label>
				</li>
			</ul>
		</div>
	);
}

export default RatingSelect;
