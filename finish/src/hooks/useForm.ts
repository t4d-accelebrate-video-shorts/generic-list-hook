import { useState, ChangeEvent } from "react";

export type HTMLFormControls =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export type FormHook = <T>(
  initialForm: T
) => [T, (e: ChangeEvent<HTMLFormControls>) => void, () => void];

export const useForm: FormHook = (initialForm) => {
  const [form, setForm] = useState({ ...initialForm });

  const change = (e: ChangeEvent<HTMLFormControls>) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.getAttribute("data-type") === "number"
          ? parseInt(e.target.value, 10)
          : e.target.value,
    });
  };

  const resetForm = () => setForm({ ...initialForm });

  return [form, change, resetForm];
};
