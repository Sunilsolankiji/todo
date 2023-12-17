import "./TodoForm.css";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function TodoForm({ submitForm, defaultValues = null }: any) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<any>();

  useEffect(() => {
    if (defaultValues) {
      setValue("todoName", defaultValues?.todoName);
      setValue("todoDescription", defaultValues?.todoDescription);
    }
  }, [defaultValues]);

  const onSubmit: SubmitHandler<any> = (data) => {
    submitForm(data);
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="w-100">
          <div className="relative py-1">
            <label htmlFor="todoName">
              TODO Name <span className="required">*</span>
            </label>
            <input
              {...register("todoName", { required: true })}
              type="text"
              className={`w-100 p-2 mt-1 form-control ${
                errors.todoName ? "error" : ""
              }`}
              placeholder="Enter your TODO Name"
            />
            {errors.todoName && (
              <span className="required-error">TODO Name is required</span>
            )}
          </div>
          <div className="relative py-1">
            <label htmlFor="todoDescription">
              TODO Description <span className="required">*</span>
            </label>
            <textarea
              {...register("todoDescription", { required: true })}
              className={`w-100 p-2 mt-1 form-control ${
                errors.todoDescription ? "error" : ""
              }`}
              placeholder="Enter your TODO Description"
            />
            {errors.todoDescription && (
              <span className="required-error">
                TODO Description is required
              </span>
            )}
          </div>
        </div>
        <div className="form-footer text-center">
          <button className="btn-primary mt-2">{defaultValues ? 'Update TODO' : 'Add TODO'}</button>
        </div>
      </form>
      
    </>
  );
}

export default TodoForm;
