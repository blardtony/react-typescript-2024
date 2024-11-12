import { FC, useState } from 'react';
import Modal from '../common/Modal.tsx';
import CreateTodoForm from './CreateTodoForm.tsx';
import useTodos from '../../hooks/useTodos.ts';

const CreateTodo: FC = () => {
  const [modalCreateTodo, setModalCreateTodo] = useState(false);
  const { addTodo } = useTodos();

  const handleSubmit = (name: string) => {
    addTodo(name);
    setModalCreateTodo(false);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setModalCreateTodo(true)}
      >
        Create Todo
      </button>
      <Modal visible={modalCreateTodo} onHide={() => setModalCreateTodo(false)}>
        <h3 className="mb-3 text-xl font-bold">Create new todo</h3>
        <CreateTodoForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default CreateTodo;
