import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ todo, handleChange, delTodo }) => {
	const completedStyle = {
		fontStyle: 'italic',
		color: '#595959',
		opacity: 0.4,
		textDecoration: 'line-through',
	};

	return (
		<li className={styles.item}>
			<div className={styles.content}>
				<input
					type='checkbox'
					checked={todo.completed}
					onChange={() => handleChange(todo.id)}
				/>
				<button onClick={() => delTodo(todo.id)}>Delete</button>
				<span style={todo.completed ? completedStyle : null}>{todo.title}</span>
			</div>
		</li>
	);
};

// prop types
TodoItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
	}).isRequired,
};
export default TodoItem;
