import { FC } from 'react';
import { CreateTodoFormProps, TodoFormData } from '../../types/todo.type';
import { useForm } from 'react-hook-form';

const CreateTodoForm: FC<CreateTodoFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
  } = useForm<TodoFormData>();

  const onFormSubmit = (data: TodoFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4">
      <input
        className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
        type="text"
        placeholder="Enter todo name"
        {...register('name', { required: 'Name is required' })}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <button className="btn btn-primary" type="submit">
        Create todo
      </button>
    </form>
  );
};

export default CreateTodoForm;
