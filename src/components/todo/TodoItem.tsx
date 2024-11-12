import { TodoItemProps } from '../../types/todo.type';

const TodoItem = ({ todo, onRemove }: TodoItemProps) => {
  return (
    <div className="card max-w-96 rounded-md border-l-8 border-primary shadow">
      <div className="card-body">
        <div className="flex">
          <h3 className="card-title">{todo.name}</h3>
          <button
            onClick={() => onRemove(todo)}
            className="btn-danger btn ms-auto"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
