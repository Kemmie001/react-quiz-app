import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz() {
	const [response, setresponse] = useState(null);
	const [showCorrect, setshowCorrect] = useState(false);
	const [wrong, setwrong] = useState('');
	const [currentQuestion, setcurrentQuestion] = useState(0);
	const [score, setscore] = useState(0);
	const [showScore, setshowScore] = useState(false);


	useEffect(() => {
		fetchQuizs()
	}, [])

	const fetchQuizs = () => {
		axios.get('https://quizapi.io/api/v1/questions?apiKey=XceAmXPxXRzfe56S7PcE1WwnqDKBSLHHHGDY4P66&difficulty=Medium&limit=10&tags=HTML')
			.then((res) => {
				setresponse(res.data);
			})
	}
	if (!response) return "Loading questions..."

	const answers = Object.entries(response[currentQuestion].answers)

	const checkAnswer = (answer) => {

		setshowCorrect(true)
		if (response[currentQuestion].correct_answer !== answer[0]) {
			setwrong(answer[1])
		} else {
			setscore(score + 1)
		}

	}
	const newTest = () => {
		window.location.reload(false)
	}
	const handleNext = () => {
		setshowCorrect(false)
		const nextQuestion = currentQuestion + 1
		if (nextQuestion < response.length) {
			setcurrentQuestion(nextQuestion)
		} else {
			setshowScore(true)
		}
	}


	const handlePrev = () => {
		setshowCorrect(false)
		const prevQuestion = currentQuestion - 1
		setcurrentQuestion(prevQuestion)
	}
	return (
		<div className='about'>
			<h1>Quiz Project</h1>

			<div className="panel">
				{
					showScore ?
						<div className='score-section'>
							<p>You scored {score} out of {response.length}</p>
							<button onClick={newTest} className="next">
								Take a new Test</button>
						</div>
						: <div className="">
							<div className="question">
								<h3>{response[currentQuestion].question}</h3>
							</div>
							<div className="options-container">


								{answers.map((answer) =>

									< div key={answers.index} onClick={() => checkAnswer(answer)}
										className={`option ${showCorrect && answer[0] === response[currentQuestion].correct_answer && 'correct'} 
						${wrong === answer[1] && 'wrong'} ${answer[1] === null && 'hide'}`}>
										<p>{answer[1]}</p>

									</div>)}
							</div>
							<div className="navigation">
								<button disabled={currentQuestion === 0} onClick={handlePrev} className="next">Previous</button>
								<button disabled={currentQuestion === response.length} onClick={handleNext} className="next">Next</button>
							</div>
						</div>

				}
			</div>



			<p>
				<Link to='/'>Back To Home</Link>
			</p>
		</div >
	);
}

export default Quiz;
