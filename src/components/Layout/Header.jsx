import { useAuth } from "../../context/AuthContext"

export default function Header() {
    const { user, logout } = useAuth()

    return (
        <header>
            <h1>Guestbook</h1>
            { user ? 
            <>
            <p>Signing as {user.username}</p> 
            <button type='button' onClick={logout}>Logout</button>
            </>
            : <p>Not signed in</p>}
        </header>
    )
}
