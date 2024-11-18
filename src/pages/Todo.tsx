import CreateTodo from '../components/todo/CreateTodo.tsx';
import TodosList from '../components/todo/TodosList.tsx';
import TodoStats from '../components/todo/TodoStats.tsx';
import { TodoProvider } from '../contexts/TodoContext.tsx';
import useLocalStorage from '../hooks/useLocalStorage.ts';
import { Todos } from '../types/todo.type.ts';

const Todo = () => {
  const [todos, setTodos] = useLocalStorage<Todos>('todos', []);
  return (
    <TodoProvider todos={todos} setTodos={setTodos}>
      <h1 className="mb-3 text-2xl font-bold">Todo</h1>
      <TodoStats />
      <CreateTodo />
      <TodosList />
    </TodoProvider>
  );
};

export default Todo;
