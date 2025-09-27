const ResolvedTask = ({ tasks }) => {
  return (
    <div className=" py-4">
      <h2 className="text-2xl text-[#34485A] font-bold mb-4">
        Resolved Tickets
      </h2>

      {tasks && tasks.length === 0 ? (
        <p className="text-gray-500 ">No resolved tickets yet.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="px-3 py-3 my-3 rounded shadow bg-amber-100"
          >
            <p className="font-medium mb-2">{task.title}</p>
            <span className="text-green-800 bg-green-100 px-6 py-1 rounded">
              {" "}
              Completed
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default ResolvedTask;
