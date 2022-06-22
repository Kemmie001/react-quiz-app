import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './components/Header';
import FeedBackData from './data/FeedBackData'
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm';
import About from './pages/About';
import Quiz from './pages/Quiz'
import AboutIconLink from './components/AboutIconLink';
import PropTypes from 'prop-types';


function App() {
	const [feedback, setFeedback] = useState(FeedBackData);
	const addFeedBack = (newFeedBack) => {
		newFeedBack.id = uuidv4()
		setFeedback([newFeedBack, ...feedback])

	}
	const deleteFeedBack = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}

	}
	return (
		<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route exact path='/' element={
						<>
							<FeedBackForm handleAdd={addFeedBack} />
							<FeedBackStats feedback={feedback} />
							<FeedBackList feedback={feedback} handleDelete={deleteFeedBack} />
						</>
					}>
					</Route>
					<Route path='/about' element={<About />} >About</Route>
					<Route path='/Quiz' element={<Quiz />} ></Route>
				</Routes>
				<AboutIconLink />
			</div>
		</Router >
	);
}

App.propTypes = {
	feedback: PropTypes.array
}
export default App;
