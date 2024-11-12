export type Todo = {
  name: string;
};

export type Todos = Todo[];

export type CreateTodoFormProps = {
  onSubmit: (data: TodoFormData) => void;
};

export type TodoContextType = {
  todos: Todos;
  addTodo: (data: TodoFormData) => void;
};

export type TodoProviderType = {
  children: React.ReactNode;
  todos: Todos;
  setTodos: (todos: Todos) => void;
};

export type TodoFormData = {
  name: string;
};
