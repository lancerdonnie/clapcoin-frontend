import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from 'components/Form/Input';
import ReCAPTCHA from 'react-google-recaptcha';

const resolver = yupResolver(
  yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(8).required(),
  })
);

export default function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen flex">
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 p-8 px-16">
        <div className="my-8">Login to your account</div>
        <Input name="email" label="Email" register={register} errors={errors} />
        <Input
          name="password"
          label="Password"
          register={register}
          errors={errors}
          type="password"
        />
        <a className="block text-right text-xs text-yellow-500" href="">
          Forgot password?
        </a>
        <div className="mt-2 flex justify-center">
          <ReCAPTCHA sitekey="Your client site key" onChange={() => {}} />
        </div>
        <button
          className="mt-4 rounded block bg-yellow-500 w-full px-4 py-2"
          type="submit"
        >
          Login
        </button>
        <div className="block text-center text-xs mt-4">
          Don't have an account?{' '}
          <a className="font-bold" href="">
            Create an account
          </a>
        </div>
      </form>
      <div className="bg-nav flex-1 flex justify-center items-center">
        <img src="logo.png" className="" />
      </div>
    </div>
  );
}
