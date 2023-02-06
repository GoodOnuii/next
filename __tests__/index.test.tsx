import { getByRole, render, screen } from '@testing-library/react'
import { describe } from 'vitest'
import Home from '../pages'

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />)

    const heading = getByRole(container, 'heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
