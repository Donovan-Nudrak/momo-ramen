import { Heart, Leaf, Smile } from 'lucide-react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import PeachCat from '../components/illustrations/PeachCat.jsx'
import { NoodleDivider } from '../components/illustrations/RamenBowl.jsx'

const values = [
  {
    icon: Heart,
    title: 'Caldo con paciencia',
    text: 'Doce horas no son un lujo: son el mínimo para que el caldo sepa a casa y no a prisa.',
  },
  {
    icon: Leaf,
    title: 'Lo fresco del día',
    text: 'Cada mañana pasa alguien por el tianguis. Lo que no está bonito, no entra a la olla.',
  },
  {
    icon: Smile,
    title: 'Mesa amable',
    text: 'Ven a leer, a platicar o a esconderte de la lluvia. Aquí nadie te apresura el tazón.',
  },
]

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-peach/40">
        <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-mint/70 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal as="p" className="text-sm font-semibold uppercase tracking-wide text-coral-deep">
            Nosotros
          </Reveal>
          <Reveal as="h1" delay={90} className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Empezó con un gato, una maleta y una receta de Fukuoka
          </Reveal>
          <Reveal delay={180} className="mt-10">
            <figure className="overflow-hidden rounded-[2rem] bg-cream-deep shadow-soft ring-1 ring-peach/70">
              <img
                src="/images/MOMO-ramen.png"
                alt="Fachada de Momo Ramen al atardecer, con faroles y el gato de la suerte en la esquina"
                className="aspect-[16/9] w-full object-cover"
              />
              <figcaption className="px-5 py-3 text-sm text-brown-soft md:px-6">
                El local en la Roma Norte. Si ves el farol rojo, ya llegaste.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div>
          <Reveal as="blockquote" className="rounded-[1.75rem] bg-mint/50 p-6 font-display text-2xl font-bold leading-snug text-brown md:p-8 md:text-3xl">
            “Un buen ramen no presume: consuela.”
          </Reveal>
          <Reveal delay={80}>
            <NoodleDivider className="mt-8 w-28 text-coral/60" />
          </Reveal>
          <Reveal as="h2" delay={140} className="mt-6 font-display text-2xl font-extrabold">
            Nuestra historia
          </Reveal>
          <div className="mt-4 space-y-4 leading-relaxed text-brown-soft">
            <Reveal as="p" delay={200}>
              En 2022, Hana y Leo volvieron de Fukuoka con las manos olorosas a dashi y un gato color
              durazno que se llamaba, claro, Momo. Habían pasado un año detrás de barras ajenas,
              aprendiendo a respetar el caldo y a no tenerle miedo al silencio de una olla.
            </Reveal>
            <Reveal as="p" delay={280}>
              El local de la Roma Norte era chiquito y tenía una cocina que apenas cabía. Aun así,
              empezaron a cocer de madrugada. Primero vinieron vecinos. Luego gente que se bajaba del
              Metrobús con el paraguas mojado. Momo se sentaba junto a la puerta y, sin querer, le
              puso nombre al lugar.
            </Reveal>
            <Reveal as="p" delay={360}>
              Hoy el menú es más largo, el gato un poco más redondo y el caldo sigue saliendo antes
              de que abra el sol. Eso no lo vamos a cambiar.
            </Reveal>
          </div>
        </div>

        <Reveal delay={160} as="aside" className="flex flex-col">
          <figure className="overflow-hidden rounded-[2rem] bg-cream-deep shadow-soft ring-1 ring-peach/70">
            <img
              src="/images/momo-gato.png"
              alt="Momo, el gato color durazno, sentado en la barra con un pañuelo coral"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <figcaption className="px-5 py-4">
              <p className="font-display text-lg font-bold">Momo, el de la casa</p>
              <p className="mt-1 text-sm text-brown-soft">
                Color durazno, opinión fuerte sobre el pescado y dueño oficioso de la terraza.
              </p>
            </figcaption>
          </figure>
          <div className="mt-4 flex justify-center">
            <PeachCat className="w-28 md:w-32" />
          </div>
        </Reveal>
      </section>

      <section className="bg-cream-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <Reveal as="p" className="text-sm font-semibold uppercase tracking-wide text-coral-deep">
            Filosofía
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-1 font-display text-3xl font-extrabold">
            Comida que consuela
          </Reveal>
          <Reveal as="p" delay={160} className="mt-4 max-w-2xl leading-relaxed text-brown-soft">
            Usamos verdura del día, huesos de proveedores cercanos y tiempo. Mucho tiempo.
            El resto es una mesa limpia, luz suave y alguien que te pregunta si quieres el huevo
            un poco más cremoso.
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 90} className="h-full">
                <article className="h-full rounded-[1.75rem] bg-white/85 p-6 shadow-card ring-1 ring-peach/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-peach">
                    <value.icon className="h-5 w-5 text-coral-deep" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brown-soft">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8">
        <Reveal as="h2" className="font-display text-3xl font-extrabold">
          Pasa a saludar
        </Reveal>
        <Reveal as="p" delay={90} className="mx-auto mt-3 max-w-lg text-brown-soft">
          Si vienes en grupo, reserva. Si vienes solo, hay barra junto a la ventana.
          El té de jazmín va por la casa la primera vez que nos cuentas de dónde llegas.
        </Reveal>
        <Reveal delay={180} className="mt-6 flex flex-wrap justify-center gap-3">
          <Button to="/reservar">Reservar mesa</Button>
          <Button to="/menu" variant="secondary">
            Ver el menú
          </Button>
        </Reveal>
      </section>
    </>
  )
}
