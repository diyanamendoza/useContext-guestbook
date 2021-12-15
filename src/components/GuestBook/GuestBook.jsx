import { useUser } from "../../context/UserContext"
import { useEntries } from "../../context/EntryContext"
import { useState } from 'react'

export default function GuestBook() {
    const [name, setName] = useState('')
    const [guestEntry, setGuestEntry] = useState('')
    const { user, setUser } = useUser()
    const { entry, setEntries } = useEntries()

    function updateGuestName() {
        if(!guestEntry) { alert('Please write your message!')} else {
            setUser(name)
            setEntries([...entry, { name, 'message': guestEntry }])
            setGuestEntry('')
         }
    }

    const topMessage = user ? `Thanks for signing, ${user}!` : 'Please sign the guestbook!'

    const nameInput = (
        <div className='nameinput'>
            <label htmlFor='username'>Your Name</label>
            <input id='username' type='text' placeholder='name' defaultValue={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        updateGuestName()
    }

        return (
            <>
                <h2>{topMessage}</h2>
                <form onSubmit={handleSubmit}>
                    {user ? null : nameInput}
                    <label htmlFor='guest-entry'>Guest Entry</label>
                    <textarea id='guest-entry' value={guestEntry} placeholder='Your message' onChange={(e) => setGuestEntry(e.target.value)} />
                    <button type='submit'>Sign</button>
                    {user && <button type='button' 
                        onClick={() => { 
                            setUser('')
                            setName('')
                        }}>Not {user}?
                    </button>}
                </form>
            </>
        )
}
