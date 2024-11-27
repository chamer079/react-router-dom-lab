import { Link } from "react-router-dom"


const MailboxList = ({mailboxes}) => {
    console.log(mailboxes)

    return(
        <>
         <h1>Mailbox List</h1>
         <div>
            {mailboxes.map((mailbox) => (
                
                <Link
                 to={`/mailboxes/${mailbox._id}`}
                 key={mailbox._id}
                >
                <h3>Boxholder: {mailbox.boxholder}</h3>
                <p>Box Size: {mailbox.boxSize}</p>
                <h3>{mailbox._id}</h3>
                </Link>
            ))}
         </div>
        </>
    )
}

export default MailboxList