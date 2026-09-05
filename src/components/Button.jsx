import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-coral text-cream shadow-soft hover:bg-coral-deep hover:-translate-y-0.5',
  secondary:
    'bg-cream text-brown border-2 border-peach-deep hover:bg-peach hover:-translate-y-0.5',
  mint: 'bg-mint text-brown hover:bg-mint-deep hover:text-cream hover:-translate-y-0.5',
}

const sizes = {
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-3.5 text-lg',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  type = 'button',
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold',
    'transition-all duration-300 ease-out cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
    'disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0',
    variants[variant],
    sizes[size],
    className,
  ].join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
