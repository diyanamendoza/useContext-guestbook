import { useEntries } from "../../context/EntryContext"

export default function EntryList() {
    const { entry } = useEntries()

    return (
        <ul>
            {entry.map((message) => {
                return (
                    <li key={message.name+message.message}>
                        <p className='message'>{message.message}</p>
                        <p>-{message.name}</p>
                    </li>
                )
            })}
        </ul>
    )
}
