import { FC } from 'react';
import useTodos from '../../hooks/useTodos';
import TodoItem from './TodoItem';

const TodosList: FC = () => {
  const { todos } = useTodos();
  return (
    <div className="mt-4 grid gap-4">
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
