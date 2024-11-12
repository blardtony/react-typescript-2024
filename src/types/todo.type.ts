export type Todo = {
  name: string;
};

export type Todos = Todo[];

export type CreateTodoFormProps = {
  onSubmit: (name: string) => void;
};

export type TodoContextType = {
  todos: Todos;
  addTodo: (name: string) => void;
};

export type TodoProviderType = {
  children: React.ReactNode;
  todos: Todos;
  setTodos: (todos: Todos) => void;
};
