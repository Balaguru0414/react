// import { useForm } from "react-hook-form";

import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  //     {
  //     defaultValues: {
  //       username: "BG",
  //       password: "1234",
  //     },
  //   }

  //   console.log(useForm());
  //   console.log({ ...register() });
  //   console.log("ERRORS : >>", errors);
  //   console.log("watch : >>", watch("username"));
  //   const type = watch("username");

  return (
    <>
      <center>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input
            type="text"
            {...register("username", { required: "UserName is required" })}
            placeholder="UserName"
          />
          <br />
          {errors.username?.message}
          {/* {type} */}
          <br />
          <input
            type="text"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Passwords must be at least 6 characters.",
              },
              maxLength: {
                value: 10,
                message: "Password is more than 10 chars.",
              },
            })}
            placeholder="Password"
          />
          <br />
          {errors.password?.message}
          <br />
          <input
            type="text"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required",
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/u,
            })}
          />{" "}
          <br /> <br />
          <input
            type="text"
            placeholder="Enter Phone Number"
            {...register("number", {
              required: "phone number is required",
              pattern: /^[+ 0-9._%+-]{10,}$/u,
            })}
          />
          <br />
          <span>
            {errors.number?.type === "required" && "phone number is required"}
            {errors.number?.type === "pattern" && "Invalid phone nummber"}
          </span>
          <br />
          <input type="submit" />
        </form>
      </center>
    </>
  );
};

export default Form;

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

import "./form.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email("Enter valid email").required(),
  phone: yup.number().integer().positive().required(),
  password: yup.string().required().min(4).max(15),
  confirmPassword: yup.string().oneOf([yup.ref("password")]),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
  });
  //   console.log(errors);
  console.log(isValid);
  console.log(isDirty);
  return (
    <>
      <center>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register("username")} placeholder="Enter username" />
          <span>{errors.username?.message}</span>

          <input {...register("email")} placeholder="Enter email" />
          <span>{errors.email?.message}</span>

          <input {...register("phone")} placeholder="Enter phone" />
          <span>{errors.phone?.message}</span>

          <input {...register("password")} placeholder="Enter password" />
          <span>{errors.password?.message}</span>

          <input
            {...register("confirmPassword")}
            placeholder="Re-Enter Password"
          />
          <span>
            {errors.confirmPassword?.message && "Password doesn't match"}
          </span>

          <input type="submit" disabled={isDirty && !isValid} />
        </form>
      </center>
    </>
  );
};

export default Form;
