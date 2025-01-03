import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Search from './search'

jest.mock('next-intl', () => {
  return {
    useTranslations: () => () => 'Search for products',
  }
})

jest.mock('next/navigation', () => {
  return {
    useSearchParams: () => {
      return {
        get: () => {},
      }
    },
  }
})

// eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
jest.mock('next/form', () => (props: any) => {
  return <form {...props} />
})

jest.mock('@heroicons/react/24/outline', () => ({
  MagnifyingGlassIcon: () => <div />,
}))

describe('Header Page', () => {
  it('Should render Input Search', () => {
    render(<Search />)

    const inputElement = screen.getByPlaceholderText('Search for products')
    expect(inputElement).toBeInTheDocument()
  })
})
