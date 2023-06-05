const TodosList = () => {
	return (
		<ul>
			{todos.map((todo) => (
				<li>{todo.title}</li>
			))}
		</ul>
	);
};
export default TodosList;
