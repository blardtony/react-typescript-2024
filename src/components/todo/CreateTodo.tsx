import { type FC, useState } from 'react';
import useTodos from '../../hooks/useTodos.ts';
import type { TodoFormData } from '../../types/todo.type.ts';
import Modal from '../common/Modal.tsx';
import CreateTodoForm from './CreateTodoForm.tsx';

const CreateTodo: FC = () => {
	const [modalCreateTodo, setModalCreateTodo] = useState(false);
	const { addTodo } = useTodos();

	const handleSubmit = (data: TodoFormData) => {
		addTodo(data);
		setModalCreateTodo(false);
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => setModalCreateTodo(true)}
			>
				Create Todo
			</button>
			<Modal
				visible={modalCreateTodo}
				onClose={() => setModalCreateTodo(false)}
			>
				<h3 className="mb-3 text-xl font-bold">Create new todo</h3>
				<CreateTodoForm onSubmit={handleSubmit} />
			</Modal>
		</>
	);
};

export default CreateTodo;
