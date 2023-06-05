import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleChange, delTodo }) => {
	return (
		<li>
			<input
				type='checkbox'
				checked={todo.completed}
				onChange={() => handleChange(todo.id)}
			/>
			<button onClick={() => delTodo(todo.id)}>Delete</button>
			{todo.title}
		</li>
	);
};

// prop types
TodoItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
	}).isRequired,
};
export default TodoItem;
