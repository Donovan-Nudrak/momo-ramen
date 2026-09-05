export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'clasicos', label: 'Clásicos' },
  { id: 'picantes', label: 'Picantes' },
  { id: 'vegetarianos', label: 'Vegetarianos' },
]

export const categoryStyles = {
  clasicos: 'bg-peach text-brown',
  picantes: 'bg-coral/20 text-coral-deep',
  vegetarianos: 'bg-mint text-brown',
}

export const categoryLabels = {
  clasicos: 'Clásicos',
  picantes: 'Picantes',
  vegetarianos: 'Vegetarianos',
}

export const dishes = [
  {
    id: 'momo-shoyu',
    name: 'Momo Shoyu',
    category: 'clasicos',
    price: 165,
    spice: 0,
    description:
      'Caldo claro de pollo y soya que reposa desde la madrugada. Chashu suave, huevo ajitsuke y un chorrito de aceite de cebolla.',
    featured: true,
    image: '/images/momo-shoyu.png',
  },
  {
    id: 'neko-miso',
    name: 'Neko Miso',
    category: 'clasicos',
    price: 175,
    spice: 1,
    description:
      'Miso rojo y blanco, maíz tostado y cerdo caramelizado. El que pedimos cuando el día se siente frío.',
    featured: true,
    image: '/images/neko-miso.png',
  },
  {
    id: 'sakura-veggie',
    name: 'Sakura Veggie',
    category: 'vegetarianos',
    price: 155,
    spice: 0,
    description:
      'Caldo de kombu y shiitake, tofu seda, menma y un toque de umeboshi. Ligero, rosado y sin prisas.',
    image: '/images/sakura-veggie.png',
  },
  {
    id: 'spicy-tanuki',
    name: 'Spicy Tanuki',
    category: 'picantes',
    price: 180,
    spice: 3,
    description:
      'Caldo de cerdo con chile togarashi, tempura crujiente y aceite rojo. Pica de verdad; pide agua de yuzu si te atreves.',
    featured: true,
    image: '/images/spicy-tanuki.png',
  },
  {
    id: 'tonkotsu-casa',
    name: 'Tonkotsu de la casa',
    category: 'clasicos',
    price: 190,
    spice: 1,
    description:
      'Hueso de cerdo cociendo doce horas hasta quedar sedoso. Ajitama, nori tostado y cebollín bien fresco.',
    image: '/images/tonkotsu-de-la-casa.png',
  },
  {
    id: 'yuzu-shio',
    name: 'Yuzu Shio',
    category: 'clasicos',
    price: 170,
    spice: 0,
    description:
      'Caldo de pollo con sal marina y ralladura de yuzu. Limpio, aromático y perfecto para una tarde lenta.',
    image: '/images/yuzu-shio.png',
  },
  {
    id: 'fuego-kitsune',
    name: 'Fuego Kitsune',
    category: 'picantes',
    price: 185,
    spice: 2,
    description:
      'Miso picante, tofu frito, brotes de soya y chile fresco. Un fuego amable que se queda en los labios.',
    image: '/images/fuego-kitsune.png',
  },
  {
    id: 'jardin-shiitake',
    name: 'Jardín Shiitake',
    category: 'vegetarianos',
    price: 160,
    spice: 0,
    description:
      'Hongos, pak choi, ajonjolí tostado y caldo vegetal. Sabe a bosque húmedo y a cocina de casa.',
    image: '/images/jardin-shiitake.png',
  },
  {
    id: 'tantan-momo',
    name: 'Tantan Momo',
    category: 'picantes',
    price: 185,
    spice: 2,
    description:
      'Crema de sésamo, carne de cerdo condimentada y un hilo de chile. Cremoso primero, picante después.',
    image: '/images/tantan-momo.png',
  },
  {
    id: 'asari-shoyu',
    name: 'Asari Shoyu',
    category: 'clasicos',
    price: 195,
    spice: 0,
    description:
      'Almejas de temporada, soya ligera y mantequilla de ajo. Un tazón de orilla de mar, en plena Roma.',
    image: '/images/asari-shoyu.png',
  },
]
