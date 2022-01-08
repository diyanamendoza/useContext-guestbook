import { render } from '@testing-library/react'
import { AuthProvider } from '../../context/AuthContext'
import { EntryProvider } from '../../context/EntryContext'
import Home from './Home'

it('should render Home', () => {
  const { container } = render(
    <AuthProvider>
    <EntryProvider>
        <Home />
    </EntryProvider>
    </AuthProvider>)
  expect(container).toMatchSnapshot()
})