import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="ui three column centered grid">
      <div className="column">
        <h1>LOGIN FORM</h1>
        <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">User name</label>
          <input type="text" {...register("username", { required: true })} />
          {errors.username && <span>enter username</span>}
          <br />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>enter password</span>}
          <br />
          <br />
          <input type="submit" className="ui button" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
