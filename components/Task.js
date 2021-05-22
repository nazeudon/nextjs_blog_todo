export default function Task({ task }) {
  return (
    <div>
      <span>{task.id}</span>
      {" : "}
      <span className="text-white border-b border-gray-500 cursor-pointer hover:bg-gray-600">
        {task.title}
      </span>
    </div>
  );
}
