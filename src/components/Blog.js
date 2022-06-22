function Blog() {
	const title = "Blog Post"
	const body = "This is my first react project"
	const comments = [
		{ id: 1, text: "Blog title One" },
		{ id: 2, text: "Blog title Two" },
		{ id: 3, text: "Blog title Three" }
	]

	const loading = false

	if (loading) {
		<h1>Loading</h1>
	}

	const showComments = true

	return (

		<div className="">
			<h1>{title}</h1>
			<p>{body}</p>

			{showComments && (< div className="comments">
				<h3>Posts {comments.length} </h3>
				<ul>
					{comments.map((comment, index) => {
						return <li key={index} >{comment.text}</li>
					})}
				</ul>
			</div>
			)}

		</div>
	)
}
export default Blog