const InputTodo = () => (
	<>
		<form onSubmit={handleSubmit} className='form-container'>
			<input type='text' className='input-text' placeholder='Add a todo...' />
			<button className='input-submit'>Submit</button>
		</form>
		<span className='submit-warning'>{message}</span>
	</>
);
export default InputTodo;
