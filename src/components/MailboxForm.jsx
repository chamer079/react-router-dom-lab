import { useState } from "react"
import { useNavigate } from "react-router-dom"



const MailboxForm = (props) => {
    const [boxholder, setBoxholder] = useState("")
    const [boxSize, setBoxSize] = useState("Small")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBox({boxholder, boxSize})
        setBoxholder()
        setBoxholder("Small")

        navigate("/mailboxes")
    }

    return(
        <>
            <h1>Mailbox Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder-input">Boxholder:</label>
                    <input 
                        type="text"
                        id="boxholder-input"
                        name="boxholder"
                        value={boxholder}
                        onChange={(e) => setBoxholder(e.target.value)}
                    />
                <label htmlFor="boxSize-input">Box Size:</label>
                <select
                    name="boxSize"
                    id="boxSize-input"
                    onChange={(e) => setBoxSize(e.target.value)}
                >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                    <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MailboxForm