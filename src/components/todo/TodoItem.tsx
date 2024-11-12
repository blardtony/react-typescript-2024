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
            className="btn-danger btn ms-auto"
          >
            Remove
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
