import { createContext } from 'react';
import {
  TodoContextType,
  TodoFormData,
  TodoProviderType,
} from '../types/todo.type';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children, todos, setTodos }: TodoProviderType) => {
  const addTodo = (data: TodoFormData) => {
    setTodos([...todos, { name: data.name }]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
