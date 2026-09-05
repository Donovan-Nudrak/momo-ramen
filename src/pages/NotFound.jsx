import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import PeachCat from '../components/illustrations/PeachCat.jsx'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-20 text-center">
      <Reveal>
        <PeachCat className="w-44" />
      </Reveal>
      <Reveal as="h1" delay={90} className="mt-6 font-display text-3xl font-extrabold">
        Esta mesa no existe
      </Reveal>
      <Reveal as="p" delay={160} className="mt-3 text-brown-soft">
        La página que buscas se fue con el último tazón. Volvamos a la entrada.
      </Reveal>
      <Reveal delay={240}>
        <Button to="/" className="mt-6">
          Ir al inicio
        </Button>
      </Reveal>
    </div>
  )
}
