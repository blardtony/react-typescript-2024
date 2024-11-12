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
    setTodos([...todos, { name: data.name }]);
  };

  const removeTodo = (todo: Todo) => {
    const newTodos = todos.filter((t) => t.name !== todo.name);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
