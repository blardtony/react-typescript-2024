import { createContext } from 'react';
import {
  Todo,
  TodoContextType,
  TodoFormData,
  TodoProviderType,
} from '../types/todo.type';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children, todos, setTodos }: TodoProviderType) => {
  const addTodo = (data: TodoFormData) => {
    setTodos([...todos, { name: data.name, completed: false }]);
  };

  const removeTodo = (todo: Todo) => {
    const newTodos = todos.filter((t) => t.name !== todo.name);
    setTodos(newTodos);
  };

  const toggleTodo = (todo: Todo) => {
    const newTodos = todos.map((t) =>
      t.name === todo.name ? { ...t, completed: !t.completed } : t,
    );
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
