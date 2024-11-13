export type Todo = {
  id: string;
  name: string;
  completed: boolean;
  createdAt: Date;
};

export type Todos = Todo[];

export type CreateTodoFormProps = {
  onSubmit: (data: TodoFormData) => void;
};

export type TodoContextType = {
  todos: Todos;
  addTodo: (data: TodoFormData) => void;
  removeTodo: (todo: Todo) => void;
  toggleTodo: (todo: Todo) => void;
};

export type TodoProviderType = {
  children: React.ReactNode;
  todos: Todos;
  setTodos: (todos: Todos) => void;
};

export type TodoFormData = {
  name: string;
};

export type TodoItemProps = {
  todo: Todo;
};

export type DeleteTodoModalProps = {
  modalDeleteTodo: boolean;
  setModalDeleteTodo: (modalDeleteTodo: boolean) => void;
  onDelete: () => void;
};
