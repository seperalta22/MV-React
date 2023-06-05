import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todos, handleChange, delTodo }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleChange={handleChange}
					delTodo={delTodo}
				/>
			))}
		</ul>
	);
};

// prop types
TodosList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		})
	).isRequired,
};

export default TodosList;
