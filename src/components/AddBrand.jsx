import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const schema = z.object({
  name: z.string().regex(/^[A-Za-z]+$/).min(1, { message: 'Name is required' }),
}).required();

const AddBrand = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    // resolver: zodResolver(schema),
  });

  const submitHandler = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError('root', {
        message: 'An unexpected error occurred',
      });
    }
  };

  return (
    <div className=''>
      <form className='w-full' onSubmit={handleSubmit(submitHandler)}>
        <div className='flex flex-col  w-full px-8 gap-4'>
          <div className='w-full flex flex-col'>
            <label>Brand Name</label>
            <input
              {...register('name')}
              id='name'
              type='text'
              placeholder='Type category name'
              className='bg-gray-300 py-2 px-2'
            />
          </div>
          {errors.name && <div className='flex justify-center w-full gap-2'>{errors.name.message}</div>}

          <div className='flex justify-center mt-8'>
            <button type='submit' disabled={isSubmitting} className='bg-black py-2 px-2 rounded-sm text-white'>
              {isSubmitting ? 'loading...' : 'Add new brand'}
            </button>
          </div>
          {errors.root && <div className='flex justify-center w-full gap-2 text-red-500'>{errors.root.message}</div>}
        </div>
      </form>
    </div>
  );
};

export default AddBrand;
