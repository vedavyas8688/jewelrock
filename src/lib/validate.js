/** Tiny form validation helpers shared by the reservation and contact forms. */
export const rules = {
  required: (label) => (value) => (String(value ?? '').trim() ? null : `${label} is required.`),
  email: () => (value) => (!value || /^\S+@\S+\.\S+$/.test(value) ? null : 'Enter a valid email address.'),
  phone: () => (value) => (!value || /^[+\d][\d\s-]{7,}$/.test(value) ? null : 'Enter a valid phone number.'),
  futureDate: () => (value) => {
    if (!value) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(value) >= today ? null : 'Pick today or a future date.';
  },
};

export function validate(values, schema) {
  const errors = {};
  Object.entries(schema).forEach(([field, checks]) => {
    for (const check of checks) {
      const error = check(values[field]);
      if (error) {
        errors[field] = error;
        break;
      }
    }
  });
  return errors;
}

export const todayISO = () => new Date().toISOString().slice(0, 10);
