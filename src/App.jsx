import { useState } from "react";
import Footer from "./components/Footer"
import Navbar from "./components/navbar"
import Progress from "./components/Progress"
import Tickets from "./components/Ticket";

function App() {

  const [tickets, setTickets] = useState([])
fetch("/Ticket.json")
.then((res) => (res.json()))
.then((data) => setTickets(data));
console.log(tickets);

  return (
    <div>
     <Navbar />

    <div className="min-h-screen">
    <Progress />
    <Tickets tickets={tickets} />
    </div>

     <Footer />
    </div>
  )
}

export default App
