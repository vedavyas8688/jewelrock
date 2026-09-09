import { useState } from 'react';
import { validate } from '../lib/validate';

/**
 * Minimal form state: values, errors (validated on submit + on change after first submit), submitted flag.
 * onSubmit receives the values; wire an API call there when a backend exists.
 */
export function useForm(initial, schema, onSubmit) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (event) => {
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    if (touched) setErrors(validate(next, schema));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values, schema);
    setErrors(nextErrors);
    setTouched(true);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }
    onSubmit?.(values);
    setSubmitted(true);
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setTouched(false);
    setSubmitted(false);
  };

  return { values, errors, submitted, set, handleSubmit, reset };
}
