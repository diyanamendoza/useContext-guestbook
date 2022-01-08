import { useEntries } from "../../context/EntryContext"

export default function EntryList() {
    const { entry } = useEntries()

    return (
        <ul>
            {entry.map((message) => {
                return (
                    <li key={message.username+message.message}>
                        <h4 className='message'>{message.message}</h4>
                        <p>-{message.username}</p>
                    </li>
                )
            })}
        </ul>
    )
}
