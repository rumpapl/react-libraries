import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@material-ui/core';
import Select from "react-select";

const Index = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 40})} />
        {errors.firstName?.type === 'required' && "First name is required"}
        <br />
        <br />
        <input {...register("lastName", { required: true })} />
        {errors.lastName && "Last name is required"}
       <br />
       <br />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <br />
        <br />
        <input type="submit" />
      </form>

      {/* Integrating with UI libraries */}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) =>
            <Input {...field} />
          }
        />

        <Controller
          control={control}
          name='select'
          render={({ field }) =>
            <Select {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" }
              ]}
            />}
        />
        <input type="submit" />
      </form> */}
    </>
  );
}

export default Index
