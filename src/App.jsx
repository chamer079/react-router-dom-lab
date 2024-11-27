import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import NavBar from "./components/NavBar"
import MailboxList from "./components/MailboxList"
import MailboxForm from "./components/MailboxForm"
import MailboxDetaiils from "./components/MailboxDetails"

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox])
  }

  return(
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList />} />
      <Route path="new-mailbox" element={<MailboxForm addBox={addBox}/>} />
      <Route path="mailboxes/:mailboxId" element={<MailboxDetaiils /> } />
    </Routes>
    </>
  )
}

export default App