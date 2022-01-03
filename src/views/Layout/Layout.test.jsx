import { render } from '@testing-library/react'
import Layout from './Layout'
import { EntryProvider } from '../../context/EntryContext'
import { UserProvider } from '../../context/UserContext'

it('should render Layout', () => {
  const { container } = render(
    <EntryProvider>
    <UserProvider>
        <Layout />
    </UserProvider>
    </EntryProvider>
  )
  expect(container).toMatchSnapshot()
})