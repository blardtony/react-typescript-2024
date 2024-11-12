import { FC } from 'react';
import useTodos from '../../hooks/useTodos';

const TodosList: FC = () => {
  const { todos } = useTodos();
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
