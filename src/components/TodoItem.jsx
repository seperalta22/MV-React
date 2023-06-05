import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleChange }) => {
	return (
		<li>
			<input
				type='checkbox'
				checked={todo.completed}
				onChange={() => handleChange(todo.id)}
			/>
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
