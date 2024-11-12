import { createContext } from 'react';
import { TodoContextType, TodoProviderType } from '../types/todo.type';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children, todos, setTodos }: TodoProviderType) => {
  const addTodo = (name: string) => {
    setTodos([...todos, { name }]);
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
