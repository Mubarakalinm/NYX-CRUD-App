import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = props => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    data.id = null;
    console.log(data);
    props.addUser(data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: { value: true, message: "Required" }
        })}
      />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        ref={register({
          required: { value: true, message: "Required" }
        })}
      />
      <div>{errors?.username?.message}</div>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
