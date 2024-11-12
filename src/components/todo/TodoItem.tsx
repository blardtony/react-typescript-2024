import { useState } from 'react';
import { TodoItemProps } from '../../types/todo.type';
import DeleteTodoModal from './DeleteTodoModal';
import useTodos from '../../hooks/useTodos';

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
            onClick={() => setModalDeleteTodo(true)}
            className="btn btn-sm ms-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-red-500"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
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
