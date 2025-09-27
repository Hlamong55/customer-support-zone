const TaskStatus = ({ tasks, markAsResolved, notify2 }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl text-[#34485A] font-bold mb-4">Task Status</h2>

      {tasks && tasks.length === 0 ? (
        <h1 className="text-gray-600">Select a ticket to add to Task Status</h1>
      ) : (
        tasks.map((task) => (
          <div className="bg-white px-3 py-3 my-3 rounded shadow" key={task.id}>
            <span className="font-semibold">{task.title}</span>
            <br />
            <button
              className="bg-[#02A54B] text-white mt-3 p-2 rounded font-semibold w-full"
              onClick={() => {
                markAsResolved(task.id);
                notify2();
              }}
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;
