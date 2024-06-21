import { ChangeEvent, FC, FormEvent, useState } from "react";
import { FormBlock } from "./Form.styled";
interface FormProps {
  handleFormSubmit(value: string): void;
}

export const Form: FC<FormProps> = ({ handleFormSubmit }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    if (!value.trim()) {
      alert(`Write something`);
    }
    e.preventDefault();
    handleFormSubmit(value);
    setValue("");
  };
  return (
    <FormBlock onSubmit={onSubmit}>
      {" "}
      <input
        type="text"
        autoComplete="off"
        value={value}
        autoFocus
        placeholder="Search films"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </FormBlock>
  );
};
