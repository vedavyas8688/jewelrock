import { CheckCircle2 } from 'lucide-react';
import { reservations } from '../../data/pages';
import { rules, todayISO } from '../../lib/validate';
import { useForm } from '../../hooks/useForm';
import { Button } from '../ui/Button';
import { Field } from '../ui/Field';

const { form } = reservations;

const initial = { name: '', phone: '', email: '', date: '', time: form.timeSlots[8], guests: '2', occasion: form.occasions[0], notes: '' };

const schema = {
  name: [rules.required('Name')],
  phone: [rules.required('Phone'), rules.phone()],
  email: [rules.email()],
  date: [rules.required('Date'), rules.futureDate()],
  time: [rules.required('Time')],
  guests: [rules.required('Guests')],
};

const submitReservationForm = (data) => console.info('reservation request', data);

export function ReservationForm() {
  const { values, errors, submitted, set, handleSubmit, reset } = useForm(initial, schema, submitReservationForm);

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-xl bg-paper p-8 shadow-soft md:p-10" role="status">
        <CheckCircle2 size={36} className="text-success" aria-hidden="true" />
        <h2 className="text-display-md">{form.success.title}</h2>
        <p className="max-w-prose text-body text-muted">{form.success.text}</p>
        <dl className="mt-2 grid w-full grid-cols-2 gap-3 border-t border-line pt-5 text-small sm:grid-cols-3">
          <div><dt className="text-muted">Date</dt><dd className="font-medium">{values.date}</dd></div>
          <div><dt className="text-muted">Time</dt><dd className="font-medium">{values.time}</dd></div>
          <div><dt className="text-muted">Guests</dt><dd className="font-medium">{values.guests}</dd></div>
        </dl>
        <Button variant="secondary" onClick={reset} className="mt-2">
          Make another booking
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl bg-paper p-6 shadow-soft sm:p-8 md:p-10">
      <h2 className="text-display-md">{form.title}</h2>
      <p className="mt-2 text-small text-muted">{form.text}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" placeholder="Priya Sharma" autoComplete="name" required value={values.name} onChange={set('name')} error={errors.name} />
        <Field id="phone" label="Phone" type="tel" placeholder="073496 46314" autoComplete="tel" required value={values.phone} onChange={set('phone')} error={errors.phone} />
        <Field id="email" label="Email" type="email" placeholder="you@example.com" autoComplete="email" value={values.email} onChange={set('email')} error={errors.email} className="sm:col-span-2" hint="Optional — for a written confirmation." />
        <Field id="date" label="Date" type="date" min={todayISO()} required value={values.date} onChange={set('date')} error={errors.date} />
        <Field id="time" label="Time" type="select" options={form.timeSlots} required value={values.time} onChange={set('time')} error={errors.time} />
        <Field id="guests" label="Guests" type="select" options={form.guestOptions} required value={values.guests} onChange={set('guests')} error={errors.guests} />
        <Field id="occasion" label="Occasion" type="select" options={form.occasions} value={values.occasion} onChange={set('occasion')} />
        <Field id="notes" label="Anything we should know?" type="textarea" rows={3} placeholder="Allergies, a high chair, a window table…" value={values.notes} onChange={set('notes')} className="sm:col-span-2" />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-caption text-muted">We confirm every booking by phone.</p>
        <Button type="submit" size="lg" arrow className="w-full sm:w-auto">
          {form.submit}
        </Button>
      </div>
    </form>
  );
}
