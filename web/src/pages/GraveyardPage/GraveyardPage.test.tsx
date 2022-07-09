import { render } from '@redwoodjs/testing/web'

import GraveyardPage from './GraveyardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GraveyardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GraveyardPage />)
    }).not.toThrow()
  })
})
