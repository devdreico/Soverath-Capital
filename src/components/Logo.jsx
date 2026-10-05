import logoUrl from '../../assets/soverath-logo.png'

export default function Logo({ size = 40, invert = false, className = '' }) {
  const classes = ['logo', invert ? 'logo--invert' : '', className].filter(Boolean).join(' ')
  return (
    <img
      src={logoUrl}
      alt="Soverath Capital"
      className={classes}
      style={{ width: `${size}px`, height: 'auto' }}
      loading="lazy"
      decoding="async"
    />
  )
}
