import { FC } from 'react';
import useTodos from '../../hooks/useTodos';
import TodoItem from './TodoItem';

const TodosList: FC = () => {
  const { todos, removeTodo } = useTodos();
  console.log(todos);
  return (
    <div className="mt-4 grid gap-4">
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} onRemove={removeTodo} />
      ))}
    </div>
  );
};

export default TodosList;
