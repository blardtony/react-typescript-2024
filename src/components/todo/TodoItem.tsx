import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import useTodos from '../../hooks/useTodos';
import type { TodoItemProps } from '../../types/todo.type';
import DeleteTodoModal from './DeleteTodoModal';

const TodoItem = ({ todo }: TodoItemProps) => {
	const [modalDeleteTodo, setModalDeleteTodo] = useState<boolean>(false);
	const { removeTodo, toggleTodo } = useTodos();

	const onDelete = () => {
		removeTodo(todo);
		setModalDeleteTodo(false);
	};

	return (
		<div className="card max-w-96 rounded-md border-l-8 border-primary shadow">
			<div className="card-body">
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={todo.completed}
						className="checkbox-primary checkbox me-4"
						onChange={() => toggleTodo(todo)}
					/>
					<h3 className={`card-title ${todo.completed && 'line-through'}`}>
						{todo.name}
					</h3>
					<button
						type="button"
						onClick={() => setModalDeleteTodo(true)}
						className="btn btn-ghost ms-auto"
					>
						<FaTrash size={'1rem'} className="text-error" />
					</button>
					<DeleteTodoModal
						setModalDeleteTodo={setModalDeleteTodo}
						modalDeleteTodo={modalDeleteTodo}
						onDelete={onDelete}
					/>
				</div>
			</div>
		</div>
	);
};

export default TodoItem;
