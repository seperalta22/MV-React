import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todos, handleChange }) => {
	const delTodo = (id) => {
		setTodos([
			...todos.filter((todo) => {
				return todo.id !== id;
			}),
		]);
	};
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} handleChange={handleChange} />
			))}
		</ul>
	);
};

// prop types
TodosList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		})
	).isRequired,
};

export default TodosList;
