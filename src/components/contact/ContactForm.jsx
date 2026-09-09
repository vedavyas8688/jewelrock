import { CheckCircle2 } from 'lucide-react';
import { contact } from '../../data/pages';
import { rules } from '../../lib/validate';
import { useForm } from '../../hooks/useForm';
import { Button } from '../ui/Button';
import { Field } from '../ui/Field';

const { form } = contact;
const initial = { name: '', email: '', phone: '', subject: form.subjects[0], message: '' };
const schema = {
  name: [rules.required('Name')],
  email: [rules.required('Email'), rules.email()],
  phone: [rules.phone()],
  message: [rules.required('Message')],
};

const submitContactForm = (data) => console.info('contact message', data);

export function ContactForm() {
  const { values, errors, submitted, set, handleSubmit, reset } = useForm(initial, schema, submitContactForm);

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-xl bg-paper p-8 shadow-soft md:p-10" role="status">
        <CheckCircle2 size={36} className="text-success" aria-hidden="true" />
        <h2 className="text-display-md">{form.success.title}</h2>
        <p className="max-w-prose text-body text-muted">{form.success.text}</p>
        <Button variant="secondary" onClick={reset} className="mt-2">
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl bg-paper p-6 shadow-soft sm:p-8 md:p-10">
      <h2 className="text-display-md">{form.title}</h2>
      <p className="mt-2 text-small text-muted">{form.text}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" autoComplete="name" required value={values.name} onChange={set('name')} error={errors.name} />
        <Field id="email" label="Email" type="email" autoComplete="email" required value={values.email} onChange={set('email')} error={errors.email} />
        <Field id="phone" label="Phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} error={errors.phone} />
        <Field id="subject" label="Subject" type="select" options={form.subjects} value={values.subject} onChange={set('subject')} />
        <Field id="message" label="Message" type="textarea" rows={5} required value={values.message} onChange={set('message')} error={errors.message} className="sm:col-span-2" />
      </div>
      <Button type="submit" size="lg" arrow className="mt-8 w-full sm:w-auto">
        {form.submit}
      </Button>
    </form>
  );
}
