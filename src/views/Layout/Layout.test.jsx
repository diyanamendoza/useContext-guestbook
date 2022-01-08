import { render } from '@testing-library/react'
import Layout from './Layout'
import { EntryProvider } from '../../context/EntryContext'
import { UserProvider } from '../../context/UserContext'
import { AuthProvider } from '../../context/AuthContext'

it('should render Layout', () => {
  const { container } = render(
    <AuthProvider>
    <EntryProvider>
        <Layout />
    </EntryProvider>
    </AuthProvider>
  )
  expect(container).toMatchSnapshot()
})