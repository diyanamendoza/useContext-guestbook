// import { useUser } from "../../context/UserContext"
import { useAuth } from "../../context/AuthContext"
import { useEntries } from "../../context/EntryContext"
import { useState } from 'react'

export default function GuestBook() {
    // const [name, setName] = useState('')
    const [guestEntry, setGuestEntry] = useState('')
    const { user, logout } = useAuth()
    const { username } = user
    const { entry, setEntries } = useEntries()

    // function updateGuestName() {
    //     if(!guestEntry) { alert('Please write your message!')} else {
    //         setUser(name)
    //         setEntries([...entry, { name, 'message': guestEntry }])
    //         setGuestEntry('')
    //      }
    // }

    // const topMessage = user ? `Thanks for visiting, ${user.username}!` : 'Please sign the guestbook!'

    // const nameInput = (
    //     <div className='nameinput'>
    //         <label htmlFor='username'>Your Name</label>
    //         <input id='username' type='text' placeholder='name' defaultValue={name} onChange={(e) => setName(e.target.value)} />
    //     </div>
    // )

    const handleSubmit = (e) => {
        e.preventDefault()
        setEntries([...entry, { username, 'message': guestEntry }])
        setGuestEntry('')
    }

        return (
            <>
                {/* <h2>{topMessage}</h2> */}
                <form onSubmit={handleSubmit}>
                    {/* {user ? null : nameInput} */}
                    <label htmlFor='guest-entry'>Your Entry</label>
                    <textarea id='guest-entry' value={guestEntry} placeholder='Type your entry here.' onChange={(e) => setGuestEntry(e.target.value)} />
                    <button type='submit'>Add Entry to Guestbook</button>
                    {/* {user && <button type='button' 
                        onClick={() => {logout}}>Not {user}?
                    </button>} */}
                </form>
            </>
        )
}
