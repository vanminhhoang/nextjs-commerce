import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Form from '../components/Form'

describe('Form', () => {
  it('form submit with input value', () => {
    render(<Form />)
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {})
    const inputElement = screen.getByTestId('input')
    const buttonElement = screen.getByText(/Submit/i)

    fireEvent.change(inputElement, { target: { value: 'Hello world' } })
    fireEvent.click(buttonElement)

    expect(inputElement).toHaveValue('Hello world')
    expect(alertMock).toHaveBeenCalledWith('Hello world')
  })
})
