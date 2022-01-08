import {
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react'

import { MemoryRouter, Route, Switch } from 'react-router-dom'
import { AuthProvider, useAuth } from '../../context/AuthContext'
import Login from './Login'
import Home from '../Home/Home'
import { EntryProvider } from '../../context/EntryContext'

jest.mock('../../context/AuthContext', () => {
    const originalModule = jest.requireActual('../../context/AuthContext')

    return {
        ...originalModule,
        useAuth: jest.fn(() => {
            return {
                user: { username: 'Betty' },
                login: () => true
            }
        })
    }
})

it('should allow the user Betty to log in', async () => {
    const { container } = render(
        <AuthProvider>
            <EntryProvider>
            <MemoryRouter initialEntries={['/login']}>
                <Switch>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </MemoryRouter>
            </EntryProvider>
        </AuthProvider>
    )

    expect(container).toMatchSnapshot()

    const usernameField = screen.getByLabelText('Username')
    const passField = screen.getByLabelText('Password')
    const submitBtn = screen.getByRole('button', { name: 'Sign In' })

    fireEvent.change(usernameField, {
        target: { value: 'Betty' }
    })

    fireEvent.change(passField, {
        target: { value: 'Test' }
    })

    expect(usernameField).toHaveValue('Betty')
    expect(passField).toHaveValue('Test')

    fireEvent.click(submitBtn)

    return waitFor(() => {
        screen.getByText('Your Entry')
    })
})