import { useState } from "react"
import { useNavigate } from "react-router-dom"



const MailboxForm = (props) => {
    const [formData, setFormData] = useState({
        _id: "",
        boxSize: ["Small", "Medium", "Large"],
        boxholder: "",
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBox({formData})
        setFormData({
            _id: "",
            boxSize: "Small",
        })
        navigate("/mailboxes")
    }

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value})
    }

    return(
        <>
            <h1>Mailbox Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxSize-input">Box Size:</label>
                <select
                    name="boxSize"
                    id="boxSize-input"
                    onChange={handleChange}
                >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                <label htmlFor="boxholder-input">Boxholder:</label>
                    <input 
                        type="text"
                        id="boxholder-input"
                        name="boxholder"
                        value={formData.boxholder}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MailboxForm