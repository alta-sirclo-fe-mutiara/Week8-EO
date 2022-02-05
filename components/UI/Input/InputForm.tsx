import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { Form } from "react-bootstrap";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
  label: string;
  placeholder: string;
  ref: string;
  defaultValue: string;
  errors?: any;
}
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, label, placeholder, defaultValue, errors, ...rest },
  ref
) => {
  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <input
        className="form-control"
        style={{
          backgroundColor: "#F3F3F3",
        }}
        {...rest}
        placeholder={placeholder}
        ref={ref}
        defaultValue={defaultValue}
      />
      {errors && <p>Please fill or change the value</p>}
    </Form.Group>
  );
};
const InputForm = React.forwardRef(Input);
export default InputForm;
