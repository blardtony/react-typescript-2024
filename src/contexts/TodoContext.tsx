import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Todo,
  TodoContextType,
  TodoFormData,
  TodoProviderType,
} from '../types/todo.type';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children, todos, setTodos }: TodoProviderType) => {
  const addTodo = (data: TodoFormData) => {
    const newTodo: Todo = {
      id: uuidv4(),
      createdAt: new Date(),
      name: data.name,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo: Todo) => {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  const toggleTodo = (todo: Todo) => {
    const newTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t,
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
