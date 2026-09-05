import { useState } from 'react'
import { Clock, MapPin, Phone, Mail, CircleCheck } from 'lucide-react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import PeachCat from '../components/illustrations/PeachCat.jsx'
import { site, timeSlots } from '../data/site.js'

const emptyForm = {
  name: '',
  email: '',
  date: '',
  time: '',
  people: '',
}

function todayStamp() {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

function weekdayFromStamp(stamp) {
  const [year, month, day] = stamp.split('-').map(Number)
  return new Date(year, month - 1, day).getDay()
}

function formatDate(stamp) {
  const [year, month, day] = stamp.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) {
    errors.name = 'Escribe tu nombre, por favor.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Necesitamos un correo válido para confirmarte.'
  }
  if (!values.date) {
    errors.date = 'Elige un día.'
  } else if (values.date < todayStamp()) {
    errors.date = 'Esa fecha ya pasó. Elige otro día.'
  } else if (weekdayFromStamp(values.date) === 1) {
    errors.date = 'Los lunes descansamos. ¿Te late otro día?'
  }
  if (!values.time) {
    errors.time = 'Elige una hora.'
  }
  if (!values.people) {
    errors.people = 'Dinos cuántas personas vienen.'
  }
  return errors
}

export default function Reserve() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitted({ ...values, name: values.name.trim(), email: values.email.trim() })
  }

  function reset() {
    setSubmitted(null)
    setValues(emptyForm)
    setErrors({})
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-16">
      <div>
        <Reveal as="p" className="text-sm font-semibold uppercase tracking-wide text-coral-deep">
          Reservar
        </Reveal>
        <Reveal as="h1" delay={80} className="mt-1 font-display text-4xl font-extrabold">
          Guarda tu lugar en la mesa
        </Reveal>
        <Reveal as="p" delay={160} className="mt-4 max-w-xl leading-relaxed text-brown-soft">
          Anotamos tu visita aquí mismo. No hace falta pagar nada: te esperamos con el caldo listo.
          Para más de ocho personas, escríbenos a {site.email}.
        </Reveal>

        {submitted ? (
          <Reveal delay={80} className="mt-8 rounded-[1.75rem] bg-mint/50 p-6 ring-1 ring-mint-deep/40 md:p-8">
            <div className="flex items-start gap-3">
              <CircleCheck className="mt-1 h-6 w-6 shrink-0 text-mint-deep" aria-hidden="true" />
              <div>
                <h2 className="font-display text-2xl font-bold">Tu mesa quedó anotada</h2>
                <p className="mt-3 leading-relaxed text-brown-soft">
                  Gracias, {submitted.name}. Te esperamos el{' '}
                  <span className="font-semibold text-brown">{formatDate(submitted.date)}</span> a las{' '}
                  <span className="font-semibold text-brown">{submitted.time}</span> para{' '}
                  <span className="font-semibold text-brown">
                    {submitted.people} {submitted.people === '1' ? 'persona' : 'personas'}
                  </span>
                  . Si necesitamos confirmar algún detalle, te escribimos a {submitted.email}.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center sm:hidden">
              <PeachCat className="w-40" waving />
            </div>
            <Button type="button" variant="secondary" className="mt-6" onClick={reset}>
              Hacer otra reserva
            </Button>
          </Reveal>
        ) : (
          <Reveal delay={240}>
            <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
              <Field
                id="name"
                label="Nombre"
                error={errors.name}
              >
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(event) => update('name', event.target.value)}
                className={inputClass(errors.name)}
                placeholder="Ana Pérez"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
            </Field>

            <Field id="email" label="Correo" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => update('email', event.target.value)}
                className={inputClass(errors.email)}
                placeholder="ana@correo.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="date" label="Fecha" error={errors.date}>
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={todayStamp()}
                  value={values.date}
                  onChange={(event) => update('date', event.target.value)}
                  className={inputClass(errors.date)}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                />
              </Field>

              <Field id="time" label="Hora" error={errors.time}>
                <select
                  id="time"
                  name="time"
                  value={values.time}
                  onChange={(event) => update('time', event.target.value)}
                  className={`${inputClass(errors.time)} cursor-pointer`}
                  aria-invalid={Boolean(errors.time)}
                  aria-describedby={errors.time ? 'time-error' : undefined}
                >
                  <option value="">Elige una hora</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field id="people" label="Número de personas" error={errors.people}>
              <select
                id="people"
                name="people"
                value={values.people}
                onChange={(event) => update('people', event.target.value)}
                className={`${inputClass(errors.people)} cursor-pointer`}
                aria-invalid={Boolean(errors.people)}
                aria-describedby={errors.people ? 'people-error' : undefined}
              >
                <option value="">¿Cuántos vienen?</option>
                {Array.from({ length: 8 }, (_, index) => String(index + 1)).map((count) => (
                  <option key={count} value={count}>
                    {count} {count === '1' ? 'persona' : 'personas'}
                  </option>
                ))}
              </select>
            </Field>

            <p className="text-sm text-brown-muted">
              Último asiento media hora antes del cierre.
            </p>

            <Button type="submit" size="lg">
              Confirmar reserva
            </Button>
          </form>
          </Reveal>
        )}
      </div>

      <Reveal delay={140} as="aside" className="h-fit rounded-[2rem] bg-white/80 p-6 shadow-card ring-1 ring-peach/70 md:p-8">
        <div className="mb-6 flex justify-center">
          <PeachCat className="w-40 md:w-48" waving={Boolean(submitted)} />
        </div>
        <h2 className="font-display text-xl font-bold">Cómo encontrarnos</h2>
        <ul className="mt-5 space-y-4 text-sm text-brown-soft">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-brown"
            >
              {site.address}
            </a>
          </li>
          <li className="flex gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
            <a href={site.phoneHref} className="transition-colors duration-300 hover:text-brown">
              {site.phone}
            </a>
          </li>
          <li className="flex gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="transition-colors duration-300 hover:text-brown">
              {site.email}
            </a>
          </li>
        </ul>

        <div className="mt-6 rounded-3xl bg-cream p-4">
          <p className="flex items-center gap-2 font-display text-sm font-bold">
            <Clock className="h-4 w-4 text-coral" aria-hidden="true" />
            Horario
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4">
                <span className="text-brown-soft">{row.days}</span>
                <span className="font-semibold text-brown">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  )
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-brown">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-coral-deep" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function inputClass(error) {
  return [
    'w-full rounded-2xl border bg-white px-4 py-3 text-brown shadow-sm transition-colors duration-300',
    'placeholder:text-brown-muted',
    'focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-cream',
    error ? 'border-coral' : 'border-peach hover:border-peach-deep',
  ].join(' ')
}
