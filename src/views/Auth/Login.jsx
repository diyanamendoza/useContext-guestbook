import { useLocation, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import styles from '../../App.css'

export default function Login() {
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/' }}
    const auth = useAuth()
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const loginOk = await auth.login(username, pass)
        loginOk ? history.replace(from.pathname) : setError('Login failed.')
    }

    return (
        <div className={styles.formcontainer}>
            <fieldset>
            <legend>Sign In</legend>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                        <input
                        required
                        id="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                        />
                    <label htmlFor="password">Password</label>
                        <input
                        required
                        id="password"
                        type="password"
                        name="password"
                        value={pass}
                        onChange={({ target }) => setPass(target.value)}
                        />
                    <button type="submit" aria-label="Sign In">Sign In</button>
                </form>
            {error && <p>{error}</p>}
            </fieldset>
        </div>
    )
}
