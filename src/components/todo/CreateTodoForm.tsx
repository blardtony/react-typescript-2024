import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import type { CreateTodoFormProps, TodoFormData } from '../../types/todo.type';

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
			{errors.name && <p className="text-error">{errors.name.message}</p>}
			<button className="btn btn-primary" type="submit">
				Create todo
			</button>
		</form>
	);
};

export default CreateTodoForm;
