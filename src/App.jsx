import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import Progress from "./components/Progress";
import Tickets from "./components/Ticket";
import TaskStatus from "./components/TaskStatus";
import ResolvedTask from "./components/ResolvedTask";
 import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  
  useEffect(() => {
    fetch("/Ticket.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("Error loading tickets:", err));
  }, []);

  const addToProgress = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
    }
  };

  const markAsResolved = (ticketId) => {
    const ticket = inProgress.find((t) => t.id === ticketId);
    if (ticket) {
      setInProgress(inProgress.filter((t) => t.id !== ticketId));
      setResolved([...resolved, ticket]);
      setTickets(tickets.filter((t) => t.id !== ticketId));
    }
  };

// react tostify
  const notify = () => {
    toast.success("In Progress", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notify2 = () => {
    toast.success("Completed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-200">
        <Progress inProgress={inProgress} resolved={resolved} />

        <div className="md:grid grid-cols-11 px-5 mx-auto">
          <div className="col-span-9">
            <Tickets tickets={tickets} addToProgress={addToProgress} notify={notify} />
          </div>
          <div className="col-span-2 md:mt-6">
            <TaskStatus tasks={inProgress} markAsResolved={markAsResolved} notify2={notify2} />

            <ResolvedTask tasks={resolved} />
             <ToastContainer />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
