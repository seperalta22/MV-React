import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';
import { useState } from 'react';

const TodoItem = ({ todo, handleChange, delTodo, setUpdate }) => {
	const [editing, setEditing] = useState(false);

	const handleEditing = () => {
		setEditing(true);
	};

	let viewMode = {};
	let editMode = {};
	if (editing) {
		viewMode.display = 'none';
	} else {
		editMode.display = 'none';
	}

	const completedStyle = {
		fontStyle: 'italic',
		color: '#595959',
		opacity: 0.4,
		textDecoration: 'line-through',
	};

	const handleUpdatedDone = (event) => {
		if (event.key === 'Enter') {
			setEditing(false);
		}
	};

	return (
		<li className={styles.item}>
			<div className={styles.content} style={viewMode}>
				<input
					type='checkbox'
					checked={todo.completed}
					onChange={() => handleChange(todo.id)}
				/>
				<button onClick={handleEditing}>Edit</button>
				<button onClick={() => delTodo(todo.id)}>Delete</button>
				<span style={todo.completed ? completedStyle : null}>{todo.title}</span>
			</div>
			<input
				type='text'
				value={todo.title}
				className={styles.textInput}
				style={editMode}
				onChange={(e) => setUpdate(e.target.value, todo.id)}
				onKeyDown={handleUpdatedDone}
			/>
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
