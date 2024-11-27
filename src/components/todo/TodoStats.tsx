import useTodos from '../../hooks/useTodos';

const TodoStats = () => {
	const { todos } = useTodos();
	const completedTodos = todos.filter((todo) => todo.completed);
	const pourcentage = (completedTodos.length / todos.length) * 100;
	console.log(pourcentage);
	return (
		<div className="mb-4">
			<h2 className="mb-2">Completed todos</h2>
			<div
				tabIndex={0}
				className="radial-progress"
				style={
					{
						'--value': `${pourcentage}`,
					} as React.CSSProperties
				}
				role="progressbar"
				aria-valuenow={pourcentage}
				aria-valuemin={0}
				aria-valuemax={100}
			>
				{pourcentage}%
			</div>
		</div>
	);
};

export default TodoStats;
