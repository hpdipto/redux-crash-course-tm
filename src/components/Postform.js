import React, { useState } from 'react'
import axios from 'axios';

function PostForm() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const onChange = (e) => {
		e.target.name === 'title' ? setTitle(e.target.value) : setBody(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault();

		const post = {
			title,
			body
		};

		axios.post('https://jsonplaceholder.typicode.com/posts', {
					post
				})
				.then(res => {
					console.log(res.data);
				})
	}

	return (
		<div>
			<h1>Add Post</h1>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor="title">Title: </label> <br />
					<input type="text" name="title" onChange={onChange} value={title } />
				</div>
				<br />
				<div>
					<label htmlFor="body">Body: </label> <br />
					<textarea name="body" onChange={onChange} value={body} />
				</div>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}


export default PostForm;