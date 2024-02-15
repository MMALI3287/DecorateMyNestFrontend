import "./FormInput.style.scss";
import { Controller } from "react-hook-form";
const FormInput = ({
  labelText,
  type,
  name,
  control,
  errors,
  rules,
  defaultValue,
}) => {
  return (
    <div className="input-group text-blue-950  mx-auto font-bold text-xl rounded-lg w-full">
      <label className="label-text" htmlFor={name}>
        {labelText}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field }) => (
          <>
            <input
              className="rounded-xl w-1/2 mx-auto"
              {...field}
              type={type}
              id={name}
              placeholder={`Enter your ${labelText}`}
            />
            <span className="error">*{errors[name]?.message}</span>
          </>
        )}
      />
    </div>
  );
};

export default FormInput;
