import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from 'components/Form/Input';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPATCHA_SITE_KEY } from 'lib/constants';

const resolver = yupResolver(
  yup.object().shape({
    username: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(8).required(),
    confirmpassword: yup.string().min(8).required(),
  })
);

export default function register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 p-8 px-16 md:w-full sm:px-8"
      >
        <div className="my-8">Create your account</div>
        <Input
          name="username"
          label="Username"
          register={register}
          errors={errors}
        />
        <Input name="email" label="Email" register={register} errors={errors} />
        <Input
          name="password"
          label="Password"
          register={register}
          errors={errors}
          type="password"
        />
        <Input
          name="confirmpassword"
          label="Confirm Password"
          register={register}
          errors={errors}
          type="password"
        />
        <div className="mt-2 flex justify-center">
          <ReCAPTCHA
            sitekey={RECAPATCHA_SITE_KEY}
            onChange={(e) => {
              console.log(e);
            }}
          />
        </div>
        <div className="block text-center text-xs mt-4">
          By clicking the button below, you agree to ClapCoin{' '}
          <a className="text-blue-400" href="">
            Privacy Policy
          </a>
        </div>
        <button
          className="mt-4 rounded block bg-accent-2 text-white w-full px-4 py-2"
          type="submit"
        >
          Register
        </button>
      </form>
      <div className="bg-nav flex-1 flex justify-center items-center md:hidden">
        <img src="logo.png" className="" />
      </div>
    </div>
  );
}
