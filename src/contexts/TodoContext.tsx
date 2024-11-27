import { createContext, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type {
	Todo,
	TodoContextType,
	TodoFormData,
	TodoProviderType,
} from '../types/todo.type';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children, todos, setTodos }: TodoProviderType) => {
	const addTodo = useCallback(
		(data: TodoFormData) => {
			const newTodo: Todo = {
				id: uuidv4(),
				createdAt: new Date(),
				name: data.name,
				completed: false,
			};
			setTodos([...todos, newTodo]);
		},
		[todos, setTodos],
	);

	const removeTodo = useCallback(
		(todo: Todo) => {
			const newTodos = todos.filter((t) => t.id !== todo.id);
			setTodos(newTodos);
		},
		[todos, setTodos],
	);

	const toggleTodo = useCallback(
		(todo: Todo) => {
			const newTodos = todos.map((t) =>
				t.id === todo.id ? { ...t, completed: !t.completed } : t,
			);
			setTodos(newTodos);
		},
		[todos, setTodos],
	);

	const contextValue = useMemo(
		() => ({ todos, addTodo, removeTodo, toggleTodo }),
		[todos, addTodo, removeTodo, toggleTodo],
	);
	return (
		<TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
	);
};

export { TodoContext, TodoProvider };
