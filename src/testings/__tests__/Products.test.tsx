import Products from '../components/Products'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import fetch from '../__mocks__/fetch'

global.fetch = fetch as jest.Mock

describe('Products', () => {
  it('should render Products Component', async () => {
    await act(() => {
      render(<Products />)
    })
  })

  it('find product', async () => {
    render(<Products />)
    const loadingElement = screen.getByText(/Loading.../i)
    expect(loadingElement).not.toBeInTheDocument()
    const productElement = await screen.findByText(
      /Eyeshadow Palette with Mirror/i
    )
    expect(productElement).toBeInTheDocument()
  })
})
