import { useState } from 'react';

const InputTodo = () => {
	const [title, setTitle] = useState('');

	const handleChange = (e) => {
		setTitle(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(title);
		setTitle('');
	};
	return (
		<>
			<form onSubmit={handleSubmit} className='form-container'>
				<input
					type='text'
					className='input-text'
					placeholder='Add a todo...'
					value={title}
					onChange={handleChange}
				/>
				<button className='input-submit'>Submit</button>
			</form>
			<span className='submit-warning'>{message}</span>
		</>
	);
};
export default InputTodo;
