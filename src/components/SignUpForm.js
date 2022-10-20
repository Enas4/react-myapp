import { useForm } from "react-hook-form";
import "./style.css";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const { password, confirm_password } = getValues();
  if (password != confirm_password) {
    alert("Passwords not matched!");
    return;
  }
  return (
    <div className="ui three column centered grid">
      <div className="column">
        <h1>SIGN UP FORM</h1>
        <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input type="text" {...register("firstName", { required: true })} />
          {errors.firstName && <span>Fill the First Name</span>}
          <br />
          <br />
          <label>Last Name</label>
          <input type="text" {...register("lastName", { required: true })} />
          {errors.firstName && <span>Fill the Last Name</span>}
          <br />
          <br />
          <label>User Name</label>
          <input type="text" {...register("userName", { required: true })} />
          {errors.firstName && <span>Fill the User Name</span>}
          <br />
          <br />
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.firstName && <span>Enter Email add</span>}
          <br />
          <br />
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required:
                "password must contain 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number",
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
            })}
          />
          {errors.firstName && <span>{errors.password.message}</span>}
          <br />
          <br />
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirm_password", {
              validate: (value) => {
                const password = getValues("password");
                if (value != password) return "The passwords do not match";
              },
            })}
          />
          {errors.firstName && <span>{errors.confirm_password.message}</span>}
          <br />
          <br />
          <input type="submit" className="ui button" />
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
