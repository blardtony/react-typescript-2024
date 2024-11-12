export type Todo = {
  name: string;
};

export type Todos = Todo[];

export type TodoListProps = {
  todos: Todos;
};

export type CreateTodoFormProps = {
  onSubmit: (name: string) => void;
};

export type CreateTodoProps = {
  todos: Todos;
  setTodos: (todos: Todos) => void;
};
