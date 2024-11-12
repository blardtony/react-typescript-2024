import { FC } from 'react';
import { TodoListProps } from '../../types/todo.type';

const TodosList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, key) => (
          <li key={key}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
