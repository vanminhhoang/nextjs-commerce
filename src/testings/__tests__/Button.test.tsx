import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/Button'

describe('Button', () => {
  it('should render Button Component', () => {
    render(<Button label="Gửi" />)
    const buttonElement = screen.getByText('Gửi')
    expect(buttonElement).toBeInTheDocument()
  })

  it('calls onClick when button is clicked', () => {
    const onClick = jest.fn()
    render(<Button label="Gửi" onClick={onClick} />)
    const buttonElement = screen.getByText('Gửi')
    fireEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('render button as disabled', () => {
    render(<Button label="Gửi" isDisabled={false} />)
    const buttonElement = screen.getByText('Gửi')
    expect(buttonElement).not.toBeDisabled()
  })
})
