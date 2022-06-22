import React from 'react';
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedBackForm({ handleAdd }) {
	const [text, setText] = useState('');
	const [rating, setrating] = useState(4);
	const [btnDisabled, setbtnDisabled] = useState(true);
	const [message, setmessage] = useState('');
	const writeReview = (e) => {
		if (text === '') {
			setbtnDisabled(true)
			setmessage(null)
		} else if (text !== '' && text.trim().length <= 10) {
			setbtnDisabled(true)
			setmessage("Review should be atleast 10 characters")
		} else {
			setmessage(null)
			setbtnDisabled(false)
		}
		setText(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating
			}

			handleAdd(newFeedback)
			setText('')
		}
	}
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate our services?</h2>
				<RatingSelect select={(rating) => setrating(rating)} />
				<div className="input-group">
					<input onChange={writeReview} type="text" value={text} placeholder="Write your review" />
					<Button type="submit" isDisabled={btnDisabled}>Send</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}

export default FeedBackForm;
