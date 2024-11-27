import type { FC } from 'react';
import type { DeleteTodoModalProps } from '../../types/todo.type';
import Modal from '../common/Modal';

const DeleteTodoModal: FC<DeleteTodoModalProps> = ({
	modalDeleteTodo,
	setModalDeleteTodo,
	onDelete,
}) => {
	return (
		<Modal visible={modalDeleteTodo} onClose={() => setModalDeleteTodo(false)}>
			<h3 className="mb-3 text-xl font-bold">Delete todo</h3>
			<p>Are you sure you want to delete this todo?</p>
			<div className="divider" />
			<div className="modal-action">
				<form method="dialog">
					<button type="button" className="btn btn-outline">
						Close
					</button>
				</form>
				<button type="button" className="btn btn-error" onClick={onDelete}>
					Delete
				</button>
			</div>
		</Modal>
	);
};

export default DeleteTodoModal;
