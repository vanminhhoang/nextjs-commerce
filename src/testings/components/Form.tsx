import { FormEvent } from 'react'

function Form() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const input = form.elements.namedItem('name') as HTMLInputElement
    alert(input.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input data-testid="input" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
