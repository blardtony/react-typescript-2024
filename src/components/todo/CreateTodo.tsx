import { FC, useState } from 'react';
import Modal from '../common/Modal.tsx';
import CreateTodoForm from './CreateTodoForm.tsx';
import { CreateTodoProps, Todo } from '../../types/todo.type.ts';

const CreateTodo: FC<CreateTodoProps> = ({ setTodos, todos }) => {
  const [modalCreateTodo, setModalCreateTodo] = useState(false);

  const handleSubmit = (name: string) => {
    const newTodo: Todo = {
      name,
    };
    setTodos([...todos, newTodo]);
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
