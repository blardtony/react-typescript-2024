import CreateTodo from '../components/todo/CreateTodo.tsx';
import TodosList from '../components/todo/TodosList.tsx';
import useLocalStorage from '../hooks/useLocalStorage.ts';
import { Todos } from '../types/todo.type.ts';

const Todo = () => {
  const [todos, setTodos] = useLocalStorage<Todos>('todos', []);
  return (
    <>
      <h1 className="mb-3 text-2xl font-bold">Todo</h1>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodosList todos={todos} />
    </>
  );
};

export default Todo;
