import { useState } from "react";
import Footer from "./components/Footer"
import Navbar from "./components/navbar"
import Progress from "./components/Progress"
import Tickets from "./components/Ticket";
import TaskStatus from "./components/TaskStatus";
import ResolvedTask from "./components/ResolvedTask";

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
   
   <div className="md:grid grid-cols-11 gap-5 mx-auto">
     <div className="col-span-9">
      <Tickets tickets={tickets} />
    </div>
    <div className="col-span-2">
      <TaskStatus />
      <ResolvedTask />
    </div>
   </div>

    </div>

     <Footer />
    </div>
  )
}

export default App
