import { useUser } from "../../context/UserContext"

export default function Header() {
    const { user } = useUser()

    return (
        <header>
            { user ? <p>Signing as {user}</p> : <p>Sign In Below</p>}
        </header>
    )
}
