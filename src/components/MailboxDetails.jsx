import { useParams } from "react-router-dom"


const MailboxDetails = ({mailboxes}) => {
    const {mailboxId} = useParams()
    
    const selectedMailbox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
    

    return(
        <>
            <h1>Mailbox Details</h1>
            <p><strong>Box Number: </strong>{selectedMailbox._id}</p>
            <p><strong>Box Holder: </strong>{selectedMailbox.boxholder}</p>
            <p><strong>Box Size: </strong>{selectedMailbox.boxSize}</p>

        </>
    )
}

export default MailboxDetails