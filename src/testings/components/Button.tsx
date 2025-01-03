'use client'

const Button = ({
  label,
  isDisabled,
  onClick = () => {},
}: {
  label: string
  isDisabled?: boolean
  onClick?: () => void
}) => {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  )
}

export default Button
