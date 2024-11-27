import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  console.log(mailboxes);

  return (
    <>
      <h1>Mailbox List</h1>
      <div>
        {mailboxes.map((mailbox) => (
          <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
            <h3>Boxholder: {mailbox.boxholder}</h3>
            <p>Box Number: {mailbox._id}</p>
            <p>Box Size: {mailbox.boxSize}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MailboxList;
