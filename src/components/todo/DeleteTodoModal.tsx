import { FC } from 'react';
import Modal from '../common/Modal';
import { DeleteTodoModalProps } from '../../types/todo.type';

const DeleteTodoModal: FC<DeleteTodoModalProps> = ({
  modalDeleteTodo,
  setModalDeleteTodo,
  onDelete,
}) => {
  return (
    <Modal visible={modalDeleteTodo} onClose={() => setModalDeleteTodo(false)}>
      <h3 className="mb-3 text-xl font-bold">Delete todo</h3>
      <p>Are you sure you want to delete this todo?</p>
      <div className="divider"></div>
      <div className="modal-action">
        <form method="dialog">
          <button className="btn btn-outline">Close</button>
        </form>
        <button className="btn btn-error" onClick={onDelete}>
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteTodoModal;
