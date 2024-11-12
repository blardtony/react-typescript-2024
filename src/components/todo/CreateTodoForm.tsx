import { FC, useState } from 'react';
import { CreateTodoFormProps } from '../../types/todo.type';

const CreateTodoForm: FC<CreateTodoFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim()) {
      setError('Name is required');
      return;
    }

    onSubmit(name);
    setName('');
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        name="name"
        placeholder="Enter todo name"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button className="btn btn-primary" type="submit">
        Create todo
      </button>
    </form>
  );
};

export default CreateTodoForm;
